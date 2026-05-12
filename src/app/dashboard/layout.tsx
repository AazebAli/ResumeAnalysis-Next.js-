// 'use client';

// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [userName, setUserName] = useState('User');

//   useEffect(() => {
//     const stored = sessionStorage.getItem('dashboard_user');
//     if (stored) setUserName(stored);
//   }, []);

//   const sections = [
//     { path: '/dashboard/upload', label: 'Upload Resume' },
//     { path: '/dashboard/find-jobs', label: 'Find Jobs' },
//     { path: '/dashboard/analysis', label: 'Resume Analysis' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F9F5EA]">
//       <nav className="nav-bar">
//         <div className="flex items-center gap-4">
//           <div className="w-20 h-20 bg-[#F5E6CF] border-2 border-black flex items-center justify-center">
//             <span className="text-2xl font-bold">RA</span>
//           </div>
//           <h1 className="text-[26px] text-black" style={{ fontFamily: "'Jacques Francois Shadow', serif" }}>
//             Welcome, {userName}
//           </h1>
//         </div>
//         <div className="flex items-center gap-4">
//           <Link href="/" className="text-[16px] text-[#615D5A] hover:text-black transition-colors">Home</Link>
//           <button
//             onClick={() => { sessionStorage.clear(); router.push('/'); }}
//             className="text-[16px] text-[#F75756] hover:underline transition-colors"
//           >
//             Logout
//           </button>
//         </div>
//       </nav>

//       <div className="flex">
//         <div className="w-[280px] min-h-[calc(100vh-153.6px)] bg-[#F5E6CF] border-r-2 border-black shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex flex-col">
//           {sections.map((s) => (
//             <Link
//               key={s.path}
//               href={s.path}
//               className={`w-full h-[139px] flex items-center justify-center text-[24px] font-mono border-b border-black/20 transition-all ${
//                 pathname === s.path ? 'bg-[rgba(255,217,158,0.9)] shadow-inner' : 'hover:bg-[rgba(255,217,158,0.3)]'
//               }`}
//             >
//               {s.label}
//             </Link>
//           ))}
//           <div className="flex-1" />
//           <button
//             onClick={() => { sessionStorage.clear(); router.push('/'); }}
//             className="w-full h-[100px] flex items-center justify-center text-[22px] font-mono border-t border-black/20 hover:bg-[rgba(247,87,86,0.1)] transition-colors text-[#F75756]"
//           >
//             Sign Out
//           </button>
//         </div>

//         <div className="flex-1 p-8">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const C = {
  bg: '#F9F5EA',
  nav: '#F2E8D5',
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

const sections = [
  {
    path: '/dashboard/upload',
    label: 'Upload Resume',
    sub: 'Add your PDF',
    num: '01',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="12" y1="18" x2="12" y2="12"/>
        <polyline points="9 15 12 12 15 15"/>
      </svg>
    ),
  },
  {
    path: '/dashboard/find-jobs',
    label: 'Find Jobs',
    sub: 'Live listings',
    num: '02',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
  {
    path: '/dashboard/analysis',
    label: 'AI Analysis',
    sub: 'Match report',
    num: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const stored = sessionStorage.getItem('dashboard_user');
    if (stored) setUserName(stored);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', flexDirection: 'column' }}>

      {/* NAV */}
      <nav style={{
        background: C.nav,
        borderBottom: `2px solid ${C.ink}`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px', height: 72,
        position: 'relative', zIndex: 10,
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 48, height: 48,
            border: `2px solid ${C.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: C.cream,
            ...mono, fontWeight: 700, fontSize: 17, letterSpacing: 1, color: C.ink,
          }}>RA</div>
          <div>
            <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Dashboard
            </p>
            <p style={{ ...serif, fontSize: 19, fontWeight: 700, color: C.ink, margin: 0 }}>
              Welcome back, {userName}
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <Link href="/" style={{
            textDecoration: 'none',
            ...mono, fontSize: 14, color: C.muted,
            letterSpacing: '0.04em',
          }}>← Home</Link>
          <button
            onClick={() => { sessionStorage.clear(); router.push('/'); }}
            style={{
              padding: '8px 20px',
              background: 'transparent',
              border: `2px solid ${C.coral}`,
              ...mono, fontSize: 14, fontWeight: 700,
              color: C.coral, cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${C.coral}15`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* BODY */}
      <div style={{ display: 'flex', flex: 1 }}>

        {/* SIDEBAR */}
        <aside style={{
          width: 240,
          background: C.cream,
          borderRight: `2px solid ${C.ink}`,
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
        }}>
          {/* Step label */}
          <div style={{
            padding: '20px 24px 12px',
            borderBottom: `1px solid ${C.border}`,
          }}>
            <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Navigation
            </p>
          </div>

          {sections.map((s) => {
            const active = pathname === s.path;
            return (
              <Link key={s.path} href={s.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '18px 24px',
                  borderBottom: `1px solid ${C.border}`,
                  background: active ? `${C.gold}40` : 'transparent',
                  borderLeft: active ? `3px solid ${C.gold}` : '3px solid transparent',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
                  onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = `${C.gold}18`; }}
                  onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  {/* Number */}
                  <div style={{
                    width: 32, height: 32,
                    border: `1.5px solid ${active ? C.ink : C.border}`,
                    background: active ? C.white : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    ...mono, fontSize: 12, fontWeight: 700,
                    color: active ? C.ink : C.muted,
                  }}>{s.num}</div>

                  {/* Label */}
                  <div>
                    <p style={{
                      ...mono, fontSize: 14, fontWeight: active ? 700 : 400,
                      color: active ? C.ink : C.muted,
                      margin: 0, letterSpacing: '0.04em',
                    }}>{s.label}</p>
                    <p style={{
                      ...mono, fontSize: 12, color: C.muted,
                      margin: 0, opacity: 0.7,
                    }}>{s.sub}</p>
                  </div>

                  {/* Active dot */}
                  {active && (
                    <div style={{
                      marginLeft: 'auto',
                      width: 6, height: 6, borderRadius: '50%',
                      background: C.gold,
                    }} />
                  )}
                </div>
              </Link>
            );
          })}

          <div style={{ flex: 1 }} />

          {/* Sign out */}
          <button
            onClick={() => { sessionStorage.clear(); router.push('/'); }}
            style={{
              width: '100%', padding: '20px 24px',
              background: 'transparent',
              display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer', border: 'none',
              borderTop: `1px solid ${C.border}`,
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${C.coral}10`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            <span style={{ ...mono, fontSize: 13, color: C.coral, fontWeight: 700, letterSpacing: '0.06em' }}>
              Sign Out
            </span>
          </button>
        </aside>

        {/* CONTENT */}
        <main style={{ flex: 1, padding: '36px 40px', overflowY: 'auto' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
