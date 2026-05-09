import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error('Missing Google Gemini API key');
}

const genAI = new GoogleGenerativeAI(apiKey);

export interface AnalysisResult {
  matchScore: number;
  missingKeywords: string[];
  suggestions: string[];
  summary: string;
}

export interface RewriteSuggestion {
  original: string;
  rewritten: string;
  reason: string;
}

// Use the latest available flash model
const MODEL = 'gemini-2.5-flash';

const getGeminiModel = () => {
  return genAI.getGenerativeModel({ model: MODEL });
};

export const analyzeResumeForJob = async (
  resumeText: string,
  jobDescription: string
): Promise<AnalysisResult> => {
  const model = getGeminiModel();
  const prompt = `You are an expert career coach. Analyze this resume against the job description.

RESUME:
${resumeText}

JOB DESCRIPTION:
${jobDescription}

Return ONLY valid JSON (no markdown):
{
  "matchScore": number (0-100),
  "missingKeywords": ["keyword1"],
  "suggestions": ["suggestion1"],
  "summary": "brief analysis"
}`;
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  const clean = response.replace(/```json?/g, '').replace(/```/g, '').trim();
  return JSON.parse(clean);
};

export const rewriteResumeBullets = async (
  resumeText: string,
  jobDescription: string,
  missingKeywords: string[]
): Promise<RewriteSuggestion[]> => {
  const model = getGeminiModel();
  const prompt = `Rewrite resume bullets to include missing keywords naturally. Be truthful.

RESUME:
${resumeText}

JOB:
${jobDescription}

MISSING KEYWORDS:
${missingKeywords.join(', ')}

Return ONLY valid JSON array:
[{"original":"original text","rewritten":"rewritten text","reason":"why"}]`;
  const result = await model.generateContent(prompt);
  const response = result.response.text();
  const clean = response.replace(/```json?/g, '').replace(/```/g, '').trim();
  return JSON.parse(clean);
};