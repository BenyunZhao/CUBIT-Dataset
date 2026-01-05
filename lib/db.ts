import fs from 'fs';
import path from 'path';

// 定义用户数据的存储路径
const DB_PATH = path.join(process.cwd(), 'users.json');

// 初始化数据库文件
function initDb() {
    try {
        const dir = path.dirname(DB_PATH);
        if (!fs.existsSync(DB_PATH)) {
            console.log('Initializing database at:', DB_PATH);
            fs.writeFileSync(DB_PATH, JSON.stringify([]), { mode: 0o666 });
        }
    } catch (e) {
        console.error('Failed to initialize database:', e);
    }
}

export const db = {
    // 获取所有用户
    getUsers: () => {
        initDb(); // 确保文件存在
        try {
            const data = fs.readFileSync(DB_PATH, 'utf-8');
            return JSON.parse(data);
        } catch (e) {
            console.error('Failed to read users:', e);
            return [];
        }
    },
    // 保存用户
    saveUser: (user: any) => {
        const users = db.getUsers();
        users.push(user);
        try {
            fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2), { mode: 0o666 });
        } catch (e) {
            console.error('Failed to save user:', e);
            throw new Error('Database write error');
        }
    },
    // 根据邮箱查找用户
    findUserByEmail: (email: string) => {
        const users = db.getUsers();
        return users.find((u: any) => u.email === email);
    }
};
