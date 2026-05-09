// 'use client';

// import { useState, useEffect } from 'react';

// export default function FindJobsPage() {
//   const [query, setQuery] = useState('');
//   const [location, setLocation] = useState('');
//   const [jobs, setJobs] = useState<any[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [blocked, setBlocked] = useState(false);

//   useEffect(() => {
//     if (!sessionStorage.getItem('resume_uploaded')) setBlocked(true);
//   }, []);

//   const search = async () => {
//     if (!query) return;
//     setLoading(true);
//     try {
//       const res = await fetch('/api/jobs/search', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query, location }),
//       });
//       const data = await res.json();
//       setJobs(data.jobs || []);
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (blocked) {
//     return (
//       <div className="max-w-[700px] mx-auto text-center py-16">
//         <div className="w-20 h-20 mx-auto mb-6 bg-[rgba(247,87,86,0.1)] rounded-full border-2 border-[#F75756] flex items-center justify-center">
//           <svg className="w-10 h-10 text-[#F75756]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
//           </svg>
//         </div>
//         <h3 className="text-2xl font-semibold mb-2">Upload Your Resume First</h3>
//         <p className="text-[#615D5A] mb-6">You need to upload your resume before you can search for jobs.</p>
//         <a href="/dashboard/upload" className="inline-block px-6 py-3 bg-[rgba(255,217,158,0.8)] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">Go to Upload</a>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="text-[28px] font-mono mb-2">Find Jobs</h2>
//       <p className="text-[16px] text-[#615D5A] mb-6">Search through job listings matched to your skills</p>

//       <div className="flex gap-4 mb-6">
//         <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && search()} placeholder="Job title or keyword" className="flex-1 h-[50px] bg-white border-2 border-black px-4 text-sm font-mono outline-none focus:border-[#FFD99E]" />
//         <input value={location} onChange={e => setLocation(e.target.value)} onKeyDown={e => e.key === 'Enter' && search()} placeholder="Location (optional)" className="flex-1 h-[50px] bg-white border-2 border-black px-4 text-sm font-mono outline-none focus:border-[#FFD99E]" />
//         <button onClick={search} disabled={loading} className="px-6 h-[50px] bg-[#F75756] border-2 border-black text-white font-mono text-sm hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50">
//           {loading ? '...' : 'Search'}
//         </button>
//       </div>

//       {jobs.length > 0 && <p className="text-sm font-semibold mb-4">{jobs.length} jobs found</p>}

//       <div className="space-y-4">
//         {jobs.map((job, i) => (
//           <div key={i} className="bg-white border-2 border-black p-5 flex items-start justify-between gap-4">
//             <div className="flex gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-[#F5E6CF] border-2 border-black flex items-center justify-center font-bold text-sm flex-shrink-0">{job.company?.[0]}</div>
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold">{job.title}</h3>
//                 <p className="text-sm text-[#615D5A]">{job.company} • {job.location}</p>
//                 <p className="text-xs text-[#615D5A] mt-1 line-clamp-2">{job.description}</p>
//                 {job.salary && <p className="text-xs text-[#2B9064] mt-1 font-semibold">{job.salary}</p>}
//               </div>
//             </div>
//             <a href={job.url} target="_blank" rel="noopener noreferrer" className="px-5 h-[38px] bg-[#F75756] border-2 border-black flex items-center text-white text-xs font-semibold flex-shrink-0 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">Apply</a>
//           </div>
//         ))}
//         {loading && <p className="text-center py-8 text-[#615D5A]">Searching...</p>}
//         {!jobs.length && !loading && (
//           <div className="text-center py-12 text-[#615D5A]">
//             <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
//             </svg>
//             Search for jobs to see results
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';

const C = {
  bg: '#F9F5EA',
  cream: '#F2E8D5',
  ink: '#1C1611',
  muted: '#7A6A50',
  border: '#C8B99A',
  red: '#BF0000',
  green: '#2B9064',
  coral: '#F75756',
  gold: '#D4A84B',
  white: '#FFFFFF',
};

const mono: React.CSSProperties = { fontFamily: "'Courier New', Courier, monospace" };
const serif: React.CSSProperties = { fontFamily: "'Georgia', 'Times New Roman', serif" };

function hoverShadow(el: HTMLElement, enter: boolean) {
  el.style.transform = enter ? 'translate(-2px,-2px)' : 'none';
  el.style.boxShadow = enter ? `5px 5px 0 ${C.ink}` : `3px 3px 0 ${C.ink}`;
}

export default function FindJobsPage() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionStorage.getItem('resume_uploaded')) setBlocked(true);
  }, []);

  const search = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await fetch('/api/jobs/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, location }),
      });
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  if (blocked) {
    return (
      <div style={{
        maxWidth: 520, margin: '60px auto 0',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
      }}>
        <div style={{
          width: 64, height: 64, marginBottom: 24,
          border: `2px solid ${C.coral}`,
          background: `${C.coral}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: C.coral,
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <h3 style={{ ...serif, fontSize: 24, fontWeight: 700, color: C.ink, margin: '0 0 8px' }}>
          Upload your resume first
        </h3>
        <p style={{ ...mono, fontSize: 12, color: C.muted, margin: '0 0 28px', lineHeight: 1.7 }}>
          You need to upload your resume before searching for jobs.
        </p>
        <a href="/dashboard/upload" style={{ textDecoration: 'none' }}>
          <div style={{
            padding: '12px 28px',
            background: `${C.gold}CC`,
            border: `2px solid ${C.ink}`,
            boxShadow: `3px 3px 0 ${C.ink}`,
            ...mono, fontSize: 12, fontWeight: 700,
            color: C.ink, cursor: 'pointer',
            letterSpacing: '0.05em',
          }}>Go to Upload →</div>
        </a>
      </div>
    );
  }

  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 6px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Step 02
        </p>
        <h2 style={{ ...serif, fontSize: 28, fontWeight: 700, color: C.ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
          Find Jobs
        </h2>
        <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0 }}>
          Search live job listings matched to your skills
        </p>
      </div>

      {/* Search bar */}
      <div style={{
        display: 'flex', gap: 12, marginBottom: 28,
        alignItems: 'stretch',
      }}>
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search()}
          onFocus={() => setFocusedField('query')}
          onBlur={() => setFocusedField(null)}
          placeholder="Job title or keyword"
          style={{
            flex: 2, height: 48,
            background: C.white,
            border: `2px solid ${focusedField === 'query' ? C.gold : C.ink}`,
            padding: '0 16px',
            ...mono, fontSize: 13, color: C.ink,
            outline: 'none',
            transition: 'border-color 0.15s',
            boxSizing: 'border-box',
          }}
        />
        <input
          value={location}
          onChange={e => setLocation(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && search()}
          onFocus={() => setFocusedField('location')}
          onBlur={() => setFocusedField(null)}
          placeholder="Location (optional)"
          style={{
            flex: 1, height: 48,
            background: C.white,
            border: `2px solid ${focusedField === 'location' ? C.gold : C.ink}`,
            padding: '0 16px',
            ...mono, fontSize: 13, color: C.ink,
            outline: 'none',
            transition: 'border-color 0.15s',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={search}
          disabled={loading || !query}
          style={{
            height: 48, padding: '0 28px',
            background: loading || !query ? `${C.coral}70` : C.coral,
            border: `2px solid ${C.ink}`,
            boxShadow: `3px 3px 0 ${C.ink}`,
            ...mono, fontSize: 12, fontWeight: 700,
            color: C.white, cursor: loading || !query ? 'not-allowed' : 'pointer',
            letterSpacing: '0.06em', textTransform: 'uppercase',
            transition: 'transform 0.15s, box-shadow 0.15s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={e => { if (!loading && query) hoverShadow(e.currentTarget as HTMLElement, true); }}
          onMouseLeave={e => { hoverShadow(e.currentTarget as HTMLElement, false); }}
        >
          {loading ? 'Searching...' : 'Search →'}
        </button>
      </div>

      {/* Results count */}
      {jobs.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          marginBottom: 20,
        }}>
          <div style={{
            padding: '4px 14px',
            background: `${C.green}15`,
            border: `1.5px solid ${C.green}`,
            ...mono, fontSize: 11, fontWeight: 700, color: C.green,
          }}>
            {jobs.length} results found
          </div>
          <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.5 }} />
        </div>
      )}

      {/* Job cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {jobs.map((job, i) => (
          <div
            key={i}
            style={{
              background: C.white,
              border: `2px solid ${C.ink}`,
              boxShadow: `3px 3px 0 ${C.ink}`,
              padding: '20px 24px',
              display: 'flex', alignItems: 'flex-start',
              justifyContent: 'space-between', gap: 20,
              transition: 'transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
          >
            <div style={{ display: 'flex', gap: 16, flex: 1, minWidth: 0 }}>
              {/* Company initial */}
              <div style={{
                width: 44, height: 44, flexShrink: 0,
                border: `2px solid ${C.ink}`,
                background: C.cream,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                ...mono, fontSize: 15, fontWeight: 700, color: C.ink,
              }}>
                {job.company?.[0] ?? '?'}
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{
                  ...mono, fontSize: 14, fontWeight: 700,
                  color: C.ink, margin: '0 0 4px',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>{job.title}</h3>
                <p style={{ ...mono, fontSize: 11, color: C.muted, margin: '0 0 6px' }}>
                  {job.company}{job.location ? ` · ${job.location}` : ''}
                </p>
                {job.description && (
                  <p style={{
                    ...mono, fontSize: 11, color: C.muted, margin: '0 0 6px',
                    lineHeight: 1.6,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>{job.description}</p>
                )}
                {job.salary && (
                  <span style={{
                    display: 'inline-block',
                    padding: '2px 10px',
                    background: `${C.green}15`,
                    border: `1px solid ${C.green}`,
                    ...mono, fontSize: 10, fontWeight: 700, color: C.green,
                  }}>{job.salary}</span>
                )}
              </div>
            </div>

            {/* Apply button */}
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', flexShrink: 0 }}
            >
              <div style={{
                padding: '9px 20px',
                background: C.coral,
                border: `2px solid ${C.ink}`,
                boxShadow: `2px 2px 0 ${C.ink}`,
                ...mono, fontSize: 11, fontWeight: 700,
                color: C.white, cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'transform 0.15s, box-shadow 0.15s',
                whiteSpace: 'nowrap',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-1px,-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `2px 2px 0 ${C.ink}`; }}
              >Apply →</div>
            </a>
          </div>
        ))}

        {/* Loading state */}
        {loading && (
          <div style={{
            textAlign: 'center', padding: '48px 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
          }}>
            <div style={{
              width: 32, height: 32,
              border: `2px solid ${C.gold}30`,
              borderTop: `2px solid ${C.gold}`,
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
            <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0 }}>Fetching live listings...</p>
          </div>
        )}

        {/* Empty state */}
        {!jobs.length && !loading && (
          <div style={{
            textAlign: 'center', padding: '64px 0',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 56, height: 56,
              border: `2px solid ${C.border}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.muted,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </div>
            <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0 }}>
              Enter a job title above to search live listings
            </p>
          </div>
        )}
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
