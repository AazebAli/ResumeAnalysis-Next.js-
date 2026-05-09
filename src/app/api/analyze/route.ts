import { NextRequest, NextResponse } from 'next/server';
import { analyzeResumeForJob, rewriteResumeBullets } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { resumeText, jobDescription, action } = await request.json();
    
    if (!resumeText || !jobDescription) {
      return NextResponse.json(
        { error: 'Resume text and job description are required' },
        { status: 400 }
      );
    }

    if (action === 'rewrite') {
      const { missingKeywords } = await request.json();
      const suggestions = await rewriteResumeBullets(
        resumeText,
        jobDescription,
        missingKeywords || []
      );
      return NextResponse.json({ suggestions });
    }

    const analysis = await analyzeResumeForJob(resumeText, jobDescription);
    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: 'Analysis failed. Check your Gemini API key.' },
      { status: 500 }
    );
  }
}