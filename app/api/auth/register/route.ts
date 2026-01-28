import { encrypt } from '@/lib/auth';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        // 1. 解析请求体
        let body;
        try {
            body = await request.json();
        } catch (e) {
            return NextResponse.json({ error: '无效的请求数据' }, { status: 400 });
        }
        
        const { email, password, name } = body;
        if (!email || !password || !name) {
            return NextResponse.json({ error: '请填写所有必填项' }, { status: 400 });
        }

        console.log('Registration attempt:', { email, name });

        // 2. 检查用户是否存在
        let existingUser;
        try {
            existingUser = db.findUserByEmail(email);
        } catch (e) {
            console.error('DB find error:', e);
            return NextResponse.json({ error: '数据库查询失败' }, { status: 500 });
        }

        if (existingUser) {
            return NextResponse.json({ error: '用户已存在' }, { status: 400 });
        }

        // 3. 创建并保存用户
        const newUser = {
            id: Date.now().toString(),
            email,
            password, 
            name,
            createdAt: new Date().toISOString()
        };

        try {
            db.saveUser(newUser);
        } catch (e: any) {
            console.error('DB save error:', e);
            // 如果是文件系统只读错误，给出明确提示
            return NextResponse.json({ 
                error: '服务器存储受限，无法保存用户。如果您在 Vercel 预览模式下，请联系管理员配置数据库。',
                details: e.message 
            }, { status: 500 });
        }

        // 4. 生成 Session
        let session;
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        try {
            session = await encrypt({ user: { id: newUser.id, email: newUser.email, name: newUser.name }, expires });
        } catch (e) {
            console.error('Encryption error:', e);
            return NextResponse.json({ error: '加密服务异常' }, { status: 500 });
        }

        // 5. 设置 Cookie
        try {
            const cookieStore = await cookies();
            cookieStore.set('session', session, { 
                expires, 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                path: '/' 
            });
        } catch (e) {
            console.error('Cookie set error:', e);
            // 即使 Cookie 设置失败，用户也已经创建了
        }

        return NextResponse.json({ user: { email: newUser.email, name: newUser.name } });
    } catch (error: any) {
        console.error('Registration API unexpected error:', error);
        return NextResponse.json({ error: '服务器发生意外错误', details: error.message }, { status: 500 });
    }
}
