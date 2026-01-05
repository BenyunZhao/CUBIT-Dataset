import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

// JWT 密钥，在实际生产中应该通过环境变量获取
const SECRET_KEY = new TextEncoder().encode('cubit-benchmark-secret-key');

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h') // 设置 24 小时后过期
        .sign(SECRET_KEY);
}

export async function decrypt(token: string) {
    try {
        const { payload } = await jwtVerify(token, SECRET_KEY, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (e) {
        return null;
    }
}

// 获取当前登录的用户信息
export async function getSession() {
    const cookieStore = await cookies();
    const token = cookieStore.get('session')?.value;
    if (!token) return null;
    return await decrypt(token);
}
