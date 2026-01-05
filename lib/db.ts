import fs from 'fs';
import path from 'path';

// 定义用户数据的存储路径
const DB_PATH = path.join(process.cwd(), 'users.json');

// 初始化数据库文件（如果不存在）
if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

export const db = {
    // 获取所有用户
    getUsers: () => {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    },
    // 保存用户
    saveUser: (user: any) => {
        const users = db.getUsers();
        users.push(user);
        fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
    },
    // 根据邮箱查找用户
    findUserByEmail: (email: string) => {
        const users = db.getUsers();
        return users.find((u: any) => u.email === email);
    }
};
