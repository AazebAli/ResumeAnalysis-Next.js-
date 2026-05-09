import { NextRequest, NextResponse } from 'next/server';
import { searchJobs } from '@/lib/firecrawl';

export async function POST(request: NextRequest) {
  try {
    const { query, location } = await request.json();
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    const jobs = await searchJobs(query, location || '');
    
    return NextResponse.json({ jobs });
  } catch (error) {
    console.error('Job search error:', error);
    return NextResponse.json(
      { error: 'Failed to search jobs' },
      { status: 500 }
    );
  }
}