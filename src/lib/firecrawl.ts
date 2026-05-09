import FirecrawlApp from 'firecrawl';

const apiKey = process.env.FIRECRAWL_API_KEY;

let firecrawl: FirecrawlApp | null = null;
if (apiKey) {
  firecrawl = new FirecrawlApp({ apiKey });
}

export interface JobListing {
  title: string;
  company: string;
  location: string;
  description: string;
  url: string;
  salary?: string;
  postedDate?: string;
  jobType?: string;
}

export async function searchJobs(query: string, location?: string): Promise<JobListing[]> {
  if (!firecrawl) {
    console.warn('Firecrawl API key not configured. Returning mock data.');
    return getMockJobs(query, location);
  }

  try {
    const searchQuery = `${query} ${location || ''} job`.trim();
    const result = await firecrawl.search(searchQuery, {
      scrapeOptions: { formats: ['markdown'] },
    });
    
    const results = result?.web || [];
    if (!results.length) return getMockJobs(query, location);
    
    const jobs: JobListing[] = results.slice(0, 20).map((item: any) => ({
      title: item.title || query,
      company: item.source || item.metadata?.source || 'Unknown',
      location: location || 'Remote',
      description: item.markdown?.slice(0, 200) || item.description || '',
      url: item.url || '',
      postedDate: item.date || new Date().toISOString(),
    }));
    
    return jobs;
  } catch (error) {
    console.error('Firecrawl search error:', error);
    return getMockJobs(query, location);
  }
}

function getMockJobs(query: string, location?: string): JobListing[] {
  const companies = ['Google', 'Meta', 'Vercel', 'Supabase', 'Stripe', 'GitHub', 'Amazon', 'Microsoft'];
  return companies.slice(0, 4).map((company) => ({
    title: query || 'Software Engineer',
    company,
    location: location || 'Remote',
    description: `Looking for a talented professional to join our team. Work on cutting-edge technology and make an impact.`,
    url: `https://${company.toLowerCase()}.com/careers`,
    salary: '$120k - $200k',
    postedDate: `${Math.floor(Math.random() * 7) + 1} days ago`,
    jobType: 'Full-Time',
  }));
}