# Resume AI Analyzer & Job Matcher

AI-powered resume analysis and job matching platform built with Next.js 15, Supabase, and Google Gemini.

## Features

1. **Authentication & User Scope**
   - Provider: Supabase Auth (Magic Link or GitHub)
   - All resumes, job searches, and analysis reports are tied to user_id

2. **Resume Management (Upload Screen)**
   - PDF drag-and-drop upload
   - Storage: Supabase Storage bucket "resumes"
   - Text extraction and storage in profiles table

3. **Job Discovery (Find Jobs Screen)**
   - Search by keyword and location
   - Real-time job listings via Firecrawl API
   - Display results in designed cards

4. **AI Resume Analysis**
   - Split-screen comparison of resume vs job description
   - Match score percentage and missing keywords
   - AI-powered rewrite suggestions

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: Google Gemini API
- **Job Scraping**: Firecrawl API

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm
- Supabase account
- Google Gemini API key
- Firecrawl API key (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   GOOGLE_GEMINI_API_KEY=your_gemini_api_key
   FIRECRAWL_API_KEY=your_firecrawl_api_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── api/          # API routes
│   ├── upload/       # Resume upload page
│   ├── find-jobs/    # Job search page
│   ├── analysis/     # Resume analysis page
│   ├── globals.css   # Global styles & design tokens
│   ├── layout.tsx    # Root layout with Sidebar & Header
│   └── page.tsx      # Home page
├── components/
│   ├── Header.tsx    # Global header component
│   └── Sidebar.tsx   # Global sidebar component
└── lib/
    ├── supabaseClient.ts  # Supabase client & helpers
    └── gemini.ts          # Google Gemini AI helpers
```

## Design System

The application uses a brutalist-minimalist aesthetic with the following design tokens:

### Colors
- Background Primary: #F9F5EA (cream)
- Background Secondary: #F5E6CF (tan)
- Text Primary: #000000
- Accent Gold: #FFD99E
- Accent Red: #F75756
- Accent Green: #2B9064

### Typography
- Font: Intel One Mono (monospace)
- Sizes: 12px, 14px, 18px, 20px, 22px, 24px, 28px, 30px, 34px

## Database Schema

### Tables
- `profiles` - User profiles with resume text
- `resumes` - Resume file metadata
- `job_matches` - Saved job matches with analysis

## API Routes (To be implemented)

- `POST /api/upload` - Upload resume PDF
- `POST /api/analyze` - Analyze resume against job description
- `POST /api/jobs/search` - Search jobs via Firecrawl
- `POST /api/match` - Save job match to database

## License

MIT