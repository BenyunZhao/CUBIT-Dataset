import { encrypt } from '@/lib/auth';
import { db } from '@/lib/db';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        // 验证用户
        const user = db.findUserByEmail(email);
        if (!user || user.password !== password) {
            return NextResponse.json({ error: '邮箱或密码错误' }, { status: 401 });
        }

        // 创建 Session
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt({ user: { id: user.id, email: user.email, name: user.name }, expires });

        // 设置 Cookie
        const cookieStore = await cookies();
        cookieStore.set('session', session, { 
            expires, 
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/' 
        });

        return NextResponse.json({ user: { email: user.email, name: user.name } });
    } catch (error: any) {
        console.error('Login error:', error);
        return NextResponse.json({ error: '登录失败', details: error.message }, { status: 500 });
    }
}
