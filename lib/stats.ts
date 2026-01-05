import fs from 'fs';
import path from 'path';

const STATS_PATH = path.join(process.cwd(), 'stats.json');

if (!fs.existsSync(STATS_PATH)) {
    fs.writeFileSync(STATS_PATH, JSON.stringify({ views: 0 }));
}

export const statsDb = {
    getViews: () => {
        const data = fs.readFileSync(STATS_PATH, 'utf-8');
        return JSON.parse(data).views;
    },
    incrementViews: () => {
        const views = statsDb.getViews() + 1;
        fs.writeFileSync(STATS_PATH, JSON.stringify({ views }));
        return views;
    }
};
