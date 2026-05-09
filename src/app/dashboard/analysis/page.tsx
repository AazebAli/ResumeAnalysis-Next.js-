
// 'use client';

// import { useState, useEffect } from 'react';

// const C = {
//   bg: '#F9F5EA',
//   cream: '#F2E8D5',
//   ink: '#1C1611',
//   muted: '#7A6A50',
//   border: '#C8B99A',
//   red: '#BF0000',
//   green: '#2B9064',
//   coral: '#F75756',
//   gold: '#D4A84B',
//   white: '#FFFFFF',
// };

// const mono: React.CSSProperties = { fontFamily: "'Courier New', Courier, monospace" };
// const serif: React.CSSProperties = { fontFamily: "'Georgia', 'Times New Roman', serif" };

// function scoreColor(score: number) {
//   if (score >= 70) return C.green;
//   if (score >= 50) return C.gold;
//   return C.coral;
// }

// export default function AnalysisPage() {
//   const [jobDesc, setJobDesc] = useState('');
//   const [result, setResult] = useState<any>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [blocked, setBlocked] = useState(false);
//   const [resumeText, setResumeText] = useState('');
//   const [focusedField, setFocusedField] = useState(false);

//   useEffect(() => {
//     const stored = sessionStorage.getItem('resume_text');
//     const uploaded = sessionStorage.getItem('resume_uploaded');
//     if (!uploaded) { setBlocked(true); return; }
//     setResumeText(stored || 'Sample resume text loaded from upload.');
//   }, []);

//   const analyze = async () => {
//     if (!jobDesc) return;
//     setLoading(true);
//     setError('');
//     try {
//       const res = await fetch('/api/analyze', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ resumeText, jobDescription: jobDesc }),
//       });
//       const data = await res.json();
//       if (!res.ok) { setError(data.error || 'Analysis failed'); return; }
//       setResult(data.analysis);
//     } catch {
//       setError('Failed to connect to Gemini API. Check your API key.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (blocked) {
//     return (
//       <div style={{
//         maxWidth: 520, margin: '60px auto 0',
//         display: 'flex', flexDirection: 'column', alignItems: 'center',
//         textAlign: 'center',
//       }}>
//         <div style={{
//           width: 64, height: 64, marginBottom: 24,
//           border: `2px solid ${C.coral}`,
//           background: `${C.coral}10`,
//           display: 'flex', alignItems: 'center', justifyContent: 'center',
//           color: C.coral,
//         }}>
//           <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
//             <line x1="12" y1="9" x2="12" y2="13"/>
//             <line x1="12" y1="17" x2="12.01" y2="17"/>
//           </svg>
//         </div>
//         <h3 style={{ ...serif, fontSize: 24, fontWeight: 700, color: C.ink, margin: '0 0 8px' }}>
//           Upload your resume first
//         </h3>
//         <p style={{ ...mono, fontSize: 12, color: C.muted, margin: '0 0 28px', lineHeight: 1.7 }}>
//           Upload your resume before analyzing it against job descriptions.
//         </p>
//         <a href="/dashboard/upload" style={{ textDecoration: 'none' }}>
//           <div style={{
//             padding: '12px 28px',
//             background: `${C.gold}CC`,
//             border: `2px solid ${C.ink}`,
//             boxShadow: `3px 3px 0 ${C.ink}`,
//             ...mono, fontSize: 12, fontWeight: 700,
//             color: C.ink, cursor: 'pointer',
//             letterSpacing: '0.05em',
//           }}>Go to Upload →</div>
//         </a>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Page header */}
//       <div style={{ marginBottom: 32 }}>
//         <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 6px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
//           Step 03
//         </p>
//         <h2 style={{ ...serif, fontSize: 28, fontWeight: 700, color: C.ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
//           Resume Analysis
//         </h2>
//         <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0 }}>
//           Paste a job description to get your AI-powered match score
//         </p>
//       </div>

//       {/* Two-column layout */}
//       <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

//         {/* LEFT — Resume */}
//         <div style={{
//           flex: '0 0 52%',
//           background: C.white,
//           border: `2px solid ${C.ink}`,
//           boxShadow: `4px 4px 0 ${C.ink}`,
//           display: 'flex', flexDirection: 'column',
//         }}>
//           {/* Panel header */}
//           <div style={{
//             height: 48, background: C.cream,
//             borderBottom: `2px solid ${C.ink}`,
//             display: 'flex', alignItems: 'center',
//             padding: '0 20px', gap: 10,
//           }}>
//             <div style={{
//               width: 8, height: 8, borderRadius: '50%',
//               background: C.green,
//             }} />
//             <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//               Your Resume
//             </span>
//           </div>
//           <div style={{
//             padding: '20px',
//             maxHeight: 420, overflowY: 'auto',
//           }}>
//             <pre style={{
//               ...mono, fontSize: 11, color: C.muted,
//               whiteSpace: 'pre-wrap', lineHeight: 1.75, margin: 0,
//             }}>{resumeText}</pre>
//           </div>
//         </div>

//         {/* RIGHT — Job desc + results */}
//         <div style={{
//           flex: 1,
//           display: 'flex', flexDirection: 'column', gap: 16,
//         }}>
//           {/* Job description input panel */}
//           <div style={{
//             background: C.white,
//             border: `2px solid ${C.ink}`,
//             boxShadow: `4px 4px 0 ${C.ink}`,
//           }}>
//             <div style={{
//               height: 48, background: C.cream,
//               borderBottom: `2px solid ${C.ink}`,
//               display: 'flex', alignItems: 'center',
//               padding: '0 20px', gap: 10,
//             }}>
//               <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.gold }} />
//               <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//                 Job Description
//               </span>
//             </div>
//             <div style={{ padding: 20 }}>
//               <textarea
//                 value={jobDesc}
//                 onChange={e => setJobDesc(e.target.value)}
//                 onFocus={() => setFocusedField(true)}
//                 onBlur={() => setFocusedField(false)}
//                 placeholder="Paste the job description here..."
//                 style={{
//                   width: '100%', height: 160,
//                   background: C.bg,
//                   border: `2px solid ${focusedField ? C.gold : C.border}`,
//                   padding: '12px 14px',
//                   ...mono, fontSize: 11, color: C.ink,
//                   resize: 'none', outline: 'none',
//                   lineHeight: 1.7, boxSizing: 'border-box',
//                   transition: 'border-color 0.15s',
//                 }}
//               />
//               <button
//                 onClick={analyze}
//                 disabled={loading || !jobDesc}
//                 style={{
//                   width: '100%', height: 44, marginTop: 12,
//                   background: loading || !jobDesc ? `${C.gold}55` : `${C.gold}CC`,
//                   border: `2px solid ${C.ink}`,
//                   boxShadow: `3px 3px 0 ${C.ink}`,
//                   ...mono, fontSize: 12, fontWeight: 700,
//                   color: C.ink, cursor: loading || !jobDesc ? 'not-allowed' : 'pointer',
//                   letterSpacing: '0.06em', textTransform: 'uppercase',
//                   transition: 'transform 0.15s, box-shadow 0.15s',
//                   opacity: loading || !jobDesc ? 0.6 : 1,
//                 }}
//                 onMouseEnter={e => { if (!loading && jobDesc) { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; } }}
//                 onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
//               >
//                 {loading ? 'Analyzing with Gemini...' : 'Analyze Match →'}
//               </button>

//               {error && (
//                 <div style={{
//                   marginTop: 12, padding: '10px 14px',
//                   background: `${C.coral}10`,
//                   border: `1.5px solid ${C.coral}`,
//                   ...mono, fontSize: 11, color: C.coral, lineHeight: 1.6,
//                 }}>{error}</div>
//               )}
//             </div>
//           </div>

//           {/* Loading indicator */}
//           {loading && (
//             <div style={{
//               background: C.white,
//               border: `2px solid ${C.ink}`,
//               padding: '32px 20px',
//               display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
//             }}>
//               <div style={{
//                 width: 32, height: 32,
//                 border: `2px solid ${C.gold}30`,
//                 borderTop: `2px solid ${C.gold}`,
//                 borderRadius: '50%',
//                 animation: 'spin 0.8s linear infinite',
//               }} />
//               <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0 }}>
//                 Gemini is analyzing your resume...
//               </p>
//             </div>
//           )}

//           {/* Results */}
//           {result && !loading && (
//             <div style={{
//               background: C.white,
//               border: `2px solid ${C.ink}`,
//               boxShadow: `4px 4px 0 ${C.ink}`,
//             }}>
//               <div style={{
//                 height: 48, background: C.cream,
//                 borderBottom: `2px solid ${C.ink}`,
//                 display: 'flex', alignItems: 'center',
//                 padding: '0 20px', gap: 10,
//               }}>
//                 <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.coral }} />
//                 <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
//                   Analysis Results
//                 </span>
//               </div>

//               <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>

//                 {/* Score */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
//                   <div style={{
//                     width: 80, height: 80, flexShrink: 0,
//                     border: `2px solid ${scoreColor(result.matchScore)}`,
//                     background: `${scoreColor(result.matchScore)}12`,
//                     display: 'flex', flexDirection: 'column',
//                     alignItems: 'center', justifyContent: 'center',
//                   }}>
//                     <span style={{
//                       ...serif, fontSize: 22, fontWeight: 700,
//                       color: scoreColor(result.matchScore), lineHeight: 1,
//                     }}>{result.matchScore}%</span>
//                   </div>
//                   <div>
//                     <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                       Match Score
//                     </p>
//                     <p style={{ ...mono, fontSize: 12, color: C.ink, margin: 0, lineHeight: 1.6 }}>
//                       {result.matchScore >= 70
//                         ? 'Strong match — you are well qualified.'
//                         : result.matchScore >= 50
//                         ? 'Decent match — some gaps to address.'
//                         : 'Low match — consider updating your resume.'}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Score bar */}
//                 <div>
//                   <div style={{ height: 6, background: `${C.border}50`, position: 'relative' }}>
//                     <div style={{
//                       position: 'absolute', left: 0, top: 0,
//                       height: '100%',
//                       width: `${result.matchScore}%`,
//                       background: scoreColor(result.matchScore),
//                       transition: 'width 0.6s ease',
//                     }} />
//                   </div>
//                 </div>

//                 {/* Summary */}
//                 {result.summary && (
//                   <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, lineHeight: 1.8 }}>
//                     {result.summary}
//                   </p>
//                 )}

//                 {/* Missing keywords */}
//                 {result.missingKeywords?.length > 0 && (
//                   <div>
//                     <p style={{ ...mono, fontSize: 10, fontWeight: 700, color: C.ink, margin: '0 0 10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                       Missing Keywords
//                     </p>
//                     <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
//                       {result.missingKeywords.map((kw: string, i: number) => (
//                         <span key={i} style={{
//                           padding: '3px 10px',
//                           background: `${C.coral}12`,
//                           border: `1.5px solid ${C.coral}`,
//                           ...mono, fontSize: 10, fontWeight: 700,
//                           color: C.coral,
//                         }}>{kw}</span>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Suggestions */}
//                 {result.suggestions?.length > 0 && (
//                   <div>
//                     <p style={{ ...mono, fontSize: 10, fontWeight: 700, color: C.ink, margin: '0 0 10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
//                       Suggestions
//                     </p>
//                     <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
//                       {result.suggestions.map((s: string, i: number) => (
//                         <div key={i} style={{
//                           display: 'flex', gap: 10, alignItems: 'flex-start',
//                         }}>
//                           <div style={{
//                             width: 18, height: 18, flexShrink: 0, marginTop: 1,
//                             border: `1.5px solid ${C.green}`,
//                             background: `${C.green}12`,
//                             display: 'flex', alignItems: 'center', justifyContent: 'center',
//                             ...mono, fontSize: 9, fontWeight: 700, color: C.green,
//                           }}>{i + 1}</div>
//                           <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, lineHeight: 1.7 }}>{s}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
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

function scoreColor(score: number) {
  if (score >= 70) return C.green;
  if (score >= 50) return C.gold;
  return C.coral;
}

// ─── Resume text parser ────────────────────────────────────────────────────────
// Splits raw extracted PDF text into labelled sections for readable display.
// Heuristic: a line that is ALL-CAPS, or ends with ':', or is very short and
// followed by body text, is treated as a section heading.
interface ResumeSection {
  heading: string | null;
  lines: string[];
}

function parseResumeText(raw: string): ResumeSection[] {
  if (!raw || !raw.trim()) return [];

  const lines = raw
    .split('\n')
    .map(l => l.trim())
    .filter(Boolean);

  const sections: ResumeSection[] = [];
  let current: ResumeSection = { heading: null, lines: [] };

  const isHeading = (line: string, next: string | undefined): boolean => {
    // All caps words (common for PDF section headers)
    if (/^[A-Z][A-Z\s&/\-]{3,}$/.test(line)) return true;
    // Ends with colon
    if (line.endsWith(':') && line.length < 50) return true;
    // Short bold-style lines (≤30 chars, title-cased, followed by longer text)
    if (
      line.length <= 35 &&
      /^[A-Z]/.test(line) &&
      next && next.length > 40
    ) return true;
    return false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const next = lines[i + 1];

    if (isHeading(line, next)) {
      if (current.lines.length > 0 || current.heading) {
        sections.push(current);
      }
      current = { heading: line.replace(/:$/, ''), lines: [] };
    } else {
      current.lines.push(line);
    }
  }
  if (current.lines.length > 0 || current.heading) sections.push(current);

  // If nothing got split into sections, return everything as one block
  if (sections.length <= 1 && !sections[0]?.heading) {
    return [{ heading: null, lines }];
  }
  return sections;
}

// ─── Resume display component ─────────────────────────────────────────────────
function ResumeDisplay({ text }: { text: string }) {
  const sections = parseResumeText(text);

  if (!text.trim()) {
    return (
      <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, fontStyle: 'italic' }}>
        No resume text available.
      </p>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {sections.map((sec, si) => (
        <div key={si}>
          {sec.heading && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              marginBottom: 10,
            }}>
              <div style={{ width: 3, height: 14, background: C.gold, flexShrink: 0 }} />
              <p style={{
                ...mono, fontSize: 10, fontWeight: 700,
                color: C.ink, margin: 0,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                {sec.heading}
              </p>
              <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.5 }} />
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingLeft: sec.heading ? 13 : 0 }}>
            {sec.lines.map((line, li) => {
              // Bullet-like lines
              const isBullet = /^[•\-–*▪◦]/.test(line);
              const cleanLine = isBullet ? line.replace(/^[•\-–*▪◦]\s*/, '') : line;
              return (
                <div key={li} style={{
                  display: 'flex', gap: 8, alignItems: 'flex-start',
                }}>
                  {isBullet && (
                    <span style={{ color: C.gold, marginTop: 1, flexShrink: 0, fontSize: 10 }}>▸</span>
                  )}
                  <p style={{
                    ...mono, fontSize: 11, color: C.muted,
                    lineHeight: 1.75, margin: 0,
                    // Detect name/header lines (first section, first line, short)
                    ...(si === 0 && li === 0 && !sec.heading && line.length < 40
                      ? { ...serif, fontSize: 15, fontWeight: 700, color: C.ink }
                      : {}),
                    // Email / phone / URL — slightly lighter
                    ...(/[@+\d\(\)\-\.]{6,}|https?:\/\/|linkedin|github/i.test(line)
                      ? { color: C.muted, fontSize: 10 }
                      : {}),
                  }}>
                    {cleanLine}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function AnalysisPage() {
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [blocked, setBlocked] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const [focusedField, setFocusedField] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem('resume_text');
    const uploaded = sessionStorage.getItem('resume_uploaded');
    if (!uploaded) { setBlocked(true); return; }
    setResumeText(stored || '');
  }, []);

  // ── Gemini API call — untouched ──────────────────────────────────────────
  const analyze = async () => {
    if (!jobDesc) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ resumeText, jobDescription: jobDesc }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Analysis failed'); return; }
      setResult(data.analysis);
    } catch {
      setError('Failed to connect to Gemini API. Check your API key.');
    } finally {
      setLoading(false);
    }
  };

  // ── Blocked state ────────────────────────────────────────────────────────
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
          Upload your resume before analyzing it against job descriptions.
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

  // ── Main layout ──────────────────────────────────────────────────────────
  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 6px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Step 03
        </p>
        <h2 style={{ ...serif, fontSize: 28, fontWeight: 700, color: C.ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
          Resume Analysis
        </h2>
        <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0 }}>
          Paste a job description to get your AI-powered match score
        </p>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>

        {/* ── LEFT — Resume viewer ── */}
        <div style={{
          flex: '0 0 52%',
          background: C.white,
          border: `2px solid ${C.ink}`,
          boxShadow: `4px 4px 0 ${C.ink}`,
          display: 'flex', flexDirection: 'column',
          maxHeight: 'calc(100vh - 220px)',
        }}>
          {/* Panel header */}
          <div style={{
            height: 48, background: C.cream,
            borderBottom: `2px solid ${C.ink}`,
            display: 'flex', alignItems: 'center',
            padding: '0 20px', gap: 10,
            flexShrink: 0,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.green }} />
            <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Your Resume
            </span>
            {resumeText && (
              <span style={{
                marginLeft: 'auto',
                padding: '2px 8px',
                background: `${C.green}15`,
                border: `1px solid ${C.green}`,
                ...mono, fontSize: 9, color: C.green, fontWeight: 700,
                letterSpacing: '0.08em', textTransform: 'uppercase',
              }}>Loaded</span>
            )}
          </div>

          {/* Scrollable resume content */}
          <div style={{ padding: '20px 24px', overflowY: 'auto', flex: 1 }}>
            <ResumeDisplay text={resumeText} />
          </div>
        </div>

        {/* ── RIGHT — Input + results ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>

          {/* Job description panel */}
          <div style={{
            background: C.white,
            border: `2px solid ${C.ink}`,
            boxShadow: `4px 4px 0 ${C.ink}`,
          }}>
            <div style={{
              height: 48, background: C.cream,
              borderBottom: `2px solid ${C.ink}`,
              display: 'flex', alignItems: 'center',
              padding: '0 20px', gap: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.gold }} />
              <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Job Description
              </span>
            </div>
            <div style={{ padding: 20 }}>
              <textarea
                value={jobDesc}
                onChange={e => setJobDesc(e.target.value)}
                onFocus={() => setFocusedField(true)}
                onBlur={() => setFocusedField(false)}
                placeholder="Paste the full job description here..."
                style={{
                  width: '100%', height: 160,
                  background: C.bg,
                  border: `2px solid ${focusedField ? C.gold : C.border}`,
                  padding: '12px 14px',
                  ...mono, fontSize: 11, color: C.ink,
                  resize: 'none', outline: 'none',
                  lineHeight: 1.7, boxSizing: 'border-box',
                  transition: 'border-color 0.15s',
                }}
              />
              <button
                onClick={analyze}
                disabled={loading || !jobDesc}
                style={{
                  width: '100%', height: 44, marginTop: 12,
                  background: loading || !jobDesc ? `${C.gold}55` : `${C.gold}CC`,
                  border: `2px solid ${C.ink}`,
                  boxShadow: `3px 3px 0 ${C.ink}`,
                  ...mono, fontSize: 12, fontWeight: 700,
                  color: C.ink,
                  cursor: loading || !jobDesc ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.06em', textTransform: 'uppercase',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                  opacity: loading || !jobDesc ? 0.6 : 1,
                }}
                onMouseEnter={e => { if (!loading && jobDesc) { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
              >
                {loading ? 'Analyzing with Gemini...' : 'Analyze Match →'}
              </button>

              {error && (
                <div style={{
                  marginTop: 12, padding: '10px 14px',
                  background: `${C.coral}10`,
                  border: `1.5px solid ${C.coral}`,
                  ...mono, fontSize: 11, color: C.coral, lineHeight: 1.6,
                }}>{error}</div>
              )}
            </div>
          </div>

          {/* Loading */}
          {loading && (
            <div style={{
              background: C.white,
              border: `2px solid ${C.ink}`,
              padding: '32px 20px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 32, height: 32,
                border: `2px solid ${C.gold}30`,
                borderTop: `2px solid ${C.gold}`,
                borderRadius: '50%',
                animation: 'spin 0.8s linear infinite',
              }} />
              <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0 }}>
                Gemini is analyzing your resume...
              </p>
            </div>
          )}

          {/* Results */}
          {result && !loading && (
            <div style={{
              background: C.white,
              border: `2px solid ${C.ink}`,
              boxShadow: `4px 4px 0 ${C.ink}`,
            }}>
              {/* Panel header */}
              <div style={{
                height: 48, background: C.cream,
                borderBottom: `2px solid ${C.ink}`,
                display: 'flex', alignItems: 'center',
                padding: '0 20px', gap: 10,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: C.coral }} />
                <span style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Analysis Results
                </span>
              </div>

              <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Score row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{
                    width: 80, height: 80, flexShrink: 0,
                    border: `2px solid ${scoreColor(result.matchScore)}`,
                    background: `${scoreColor(result.matchScore)}12`,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', justifyContent: 'center',
                    gap: 2,
                  }}>
                    <span style={{
                      ...serif, fontSize: 24, fontWeight: 700,
                      color: scoreColor(result.matchScore), lineHeight: 1,
                    }}>{result.matchScore}<span style={{ fontSize: 13 }}>%</span></span>
                  </div>
                  <div>
                    <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Match Score
                    </p>
                    <p style={{ ...mono, fontSize: 12, color: C.ink, margin: 0, lineHeight: 1.6 }}>
                      {result.matchScore >= 70
                        ? 'Strong match — you are well qualified.'
                        : result.matchScore >= 50
                        ? 'Decent match — some gaps to address.'
                        : 'Low match — consider updating your resume.'}
                    </p>
                  </div>
                </div>

                {/* Progress bar */}
                <div style={{ height: 6, background: `${C.border}50`, position: 'relative' }}>
                  <div style={{
                    position: 'absolute', left: 0, top: 0, height: '100%',
                    width: `${result.matchScore}%`,
                    background: scoreColor(result.matchScore),
                    transition: 'width 0.8s ease',
                  }} />
                </div>

                {/* Summary */}
                {result.summary && (
                  <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, lineHeight: 1.8 }}>
                    {result.summary}
                  </p>
                )}

                {/* Missing keywords */}
                {result.missingKeywords?.length > 0 && (
                  <div>
                    <p style={{ ...mono, fontSize: 10, fontWeight: 700, color: C.ink, margin: '0 0 10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Missing Keywords
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {result.missingKeywords.map((kw: string, i: number) => (
                        <span key={i} style={{
                          padding: '3px 10px',
                          background: `${C.coral}12`,
                          border: `1.5px solid ${C.coral}`,
                          ...mono, fontSize: 10, fontWeight: 700, color: C.coral,
                        }}>{kw}</span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Suggestions */}
                {result.suggestions?.length > 0 && (
                  <div>
                    <p style={{ ...mono, fontSize: 10, fontWeight: 700, color: C.ink, margin: '0 0 10px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Suggestions
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {result.suggestions.map((s: string, i: number) => (
                        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                          <div style={{
                            width: 18, height: 18, flexShrink: 0, marginTop: 1,
                            border: `1.5px solid ${C.green}`,
                            background: `${C.green}12`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            ...mono, fontSize: 9, fontWeight: 700, color: C.green,
                          }}>{i + 1}</div>
                          <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, lineHeight: 1.7 }}>{s}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
