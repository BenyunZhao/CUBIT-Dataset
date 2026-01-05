import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const { email, password, name } = await request.json();

        // 检查用户是否已存在
        const existingUser = db.findUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({ error: '用户已存在' }, { status: 400 });
        }

        // 创建新用户 (在实际项目中密码应当进行 Hash 加密，如使用 bcrypt)
        const newUser = {
            id: Date.now().toString(),
            email,
            password, 
            name,
            createdAt: new Date().toISOString()
        };

        db.saveUser(newUser);

        // 注册成功后自动登录：创建 Session
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const session = await encrypt({ user: { id: newUser.id, email: newUser.email, name: newUser.name }, expires });

        // 将 Session 存入 Cookie
        const cookieStore = await cookies();
        cookieStore.set('session', session, { expires, httpOnly: true });

        return NextResponse.json({ user: { email: newUser.email, name: newUser.name } });
    } catch (error) {
        return NextResponse.json({ error: '注册失败' }, { status: 500 });
    }
}
