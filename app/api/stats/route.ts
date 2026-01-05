import { NextResponse } from 'next/server';
import { statsDb } from '@/lib/stats';

export async function GET() {
    const views = statsDb.incrementViews();
    return NextResponse.json({ views });
}
