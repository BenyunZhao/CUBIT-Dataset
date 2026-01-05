import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

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
        cookieStore.set('session', session, { expires, httpOnly: true });

        return NextResponse.json({ user: { email: user.email, name: user.name } });
    } catch (error) {
        return NextResponse.json({ error: '登录失败' }, { status: 500 });
    }
}
