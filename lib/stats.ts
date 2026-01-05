import fs from 'fs';
import path from 'path';

const STATS_PATH = path.join(process.cwd(), 'stats.json');

function initStats() {
    try {
        if (!fs.existsSync(STATS_PATH)) {
            fs.writeFileSync(STATS_PATH, JSON.stringify({ views: 0 }));
        }
    } catch (e) {
        console.error('Failed to init stats:', e);
    }
}

export const statsDb = {
    getViews: () => {
        initStats();
        try {
            const data = fs.readFileSync(STATS_PATH, 'utf-8');
            return JSON.parse(data).views;
        } catch (e) {
            return 0;
        }
    },
    incrementViews: () => {
        const views = statsDb.getViews() + 1;
        try {
            fs.writeFileSync(STATS_PATH, JSON.stringify({ views }));
        } catch (e) {
            console.error('Failed to increment views:', e);
        }
        return views;
    }
};
