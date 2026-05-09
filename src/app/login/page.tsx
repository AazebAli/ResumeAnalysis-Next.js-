// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       const res = await fetch('/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await res.json();
      
//       if (!res.ok) {
//         setError(data.error || 'Login failed');
//         return;
//       }
      
//       router.push('/dashboard/upload');
//     } catch (err) {
//       setError('Connection error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#F9F5EA] flex flex-col">
//       <nav className="nav-bar">
//         <div className="flex items-center gap-4">
//           <div className="w-20 h-20 bg-[#F5E6CF] border-2 border-black flex items-center justify-center">
//             <span className="text-2xl font-bold">RA</span>
//           </div>
//         </div>
//         <Link href="/">
//           <div className="w-20 h-20 flex items-center justify-center group cursor-pointer">
//             <svg width="60" height="53.33" viewBox="0 0 60 53.33" fill="none" className="transition-transform group-hover:scale-110">
//               <path d="M50 26.67H10M10 26.67l20-20M10 26.67l20 20" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </div>
//         </Link>
//       </nav>

//       <div className="flex-1 flex flex-col items-center justify-center px-4">
//         <div className="bg-white border-2 border-black shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] p-12 w-full max-w-[450px]">
//           <h1 className="text-[32px] font-mono text-center mb-2">Welcome Back</h1>
//           <p className="text-[16px] text-[#615D5A] text-center mb-10">Sign in to your account</p>

//           {error && (
//             <div className="mb-6 p-4 bg-[rgba(247,87,86,0.1)] border border-[#F75756] text-[#F75756] text-[14px] font-mono">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleLogin} className="space-y-6">
//             <div>
//               <label className="text-[14px] font-semibold mb-2 block">Email</label>
//               <input
//                 type="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@example.com"
//                 className="w-full h-[55px] bg-[#F9F5EA] border-2 border-black px-4 text-[14px] font-mono outline-none focus:border-[#FFD99E] transition-colors"
//               />
//             </div>
//             <div>
//               <label className="text-[14px] font-semibold mb-2 block">Password</label>
//               <input
//                 type="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="w-full h-[55px] bg-[#F9F5EA] border-2 border-black px-4 text-[14px] font-mono outline-none focus:border-[#FFD99E] transition-colors"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full h-[55px] bg-[rgba(255,217,158,0.8)] border-2 border-black text-[18px] font-mono shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50"
//             >
//               {loading ? 'Signing in...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="mt-8 text-center">
//             <p className="text-[16px]">
//               Dont have an account?{' '}
//               <Link href="/register" className="font-semibold underline hover:text-[#BF0000] transition-colors">
//                 Register
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }
      router.push('/dashboard/upload');
    } catch {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

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
      }}>
        <div style={{
          width: 48, height: 48,
          border: `2px solid ${C.ink}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: C.cream,
          ...mono, fontWeight: 700, fontSize: 15, letterSpacing: 1, color: C.ink,
        }}>RA</div>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40,
            border: `2px solid ${C.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: C.white, cursor: 'pointer', color: C.ink,
            transition: 'transform 0.15s, box-shadow 0.15s',
            boxShadow: `3px 3px 0 ${C.ink}`,
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
          </div>
        </Link>
      </nav>

      {/* MAIN */}
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '48px 24px',
      }}>

        {/* Label above card */}
        <p style={{
          ...mono, fontSize: 10, fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: C.muted, marginBottom: 20,
        }}>Resume AI Analyzer</p>

        {/* Card */}
        <div style={{
          background: C.white,
          border: `2px solid ${C.ink}`,
          boxShadow: `6px 6px 0 ${C.ink}`,
          padding: '48px 44px 44px',
          width: '100%', maxWidth: 440,
        }}>

          {/* Heading */}
          <h1 style={{
            ...serif, fontSize: 30, fontWeight: 700,
            color: C.ink, textAlign: 'center',
            margin: '0 0 6px', letterSpacing: '-0.02em',
          }}>Welcome back</h1>
          <p style={{
            ...mono, fontSize: 12, color: C.muted,
            textAlign: 'center', margin: '0 0 36px', lineHeight: 1.6,
          }}>Sign in to continue to your account</p>

          {/* Error */}
          {error && (
            <div style={{
              marginBottom: 24, padding: '12px 16px',
              background: `${C.coral}12`,
              border: `1.5px solid ${C.coral}`,
              ...mono, fontSize: 12, color: C.coral, lineHeight: 1.6,
            }}>{error}</div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Email */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                placeholder="you@example.com"
                style={{
                  height: 50,
                  background: C.bg,
                  border: `2px solid ${focusedField === 'email' ? C.gold : C.ink}`,
                  padding: '0 16px',
                  ...mono, fontSize: 13, color: C.ink,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Password */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label style={{ ...mono, fontSize: 11, fontWeight: 700, color: C.ink, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                onFocus={() => setFocusedField('password')}
                onBlur={() => setFocusedField(null)}
                placeholder="••••••••"
                style={{
                  height: 50,
                  background: C.bg,
                  border: `2px solid ${focusedField === 'password' ? C.gold : C.ink}`,
                  padding: '0 16px',
                  ...mono, fontSize: 13, color: C.ink,
                  outline: 'none',
                  transition: 'border-color 0.15s',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                height: 52, marginTop: 4,
                background: loading ? `${C.gold}66` : `${C.gold}CC`,
                border: `2px solid ${C.ink}`,
                boxShadow: `4px 4px 0 ${C.ink}`,
                ...mono, fontSize: 13, fontWeight: 700,
                color: C.ink, cursor: loading ? 'not-allowed' : 'pointer',
                letterSpacing: '0.06em', textTransform: 'uppercase',
                transition: 'transform 0.15s, box-shadow 0.15s',
                opacity: loading ? 0.7 : 1,
              }}
              onMouseEnter={e => { if (!loading) { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0 ${C.ink}`; } }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `4px 4px 0 ${C.ink}`; }}
            >
              {loading ? 'Signing in...' : 'Sign In →'}
            </button>
          </form>

          {/* Divider */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            margin: '28px 0',
          }}>
            <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.6 }} />
            <span style={{ ...mono, fontSize: 10, color: C.muted, letterSpacing: '0.1em' }}>OR</span>
            <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.6 }} />
          </div>

          {/* Register link */}
          <p style={{ ...mono, fontSize: 12, color: C.muted, textAlign: 'center', margin: 0 }}>
            Don&apos;t have an account?{' '}
            <Link href="/register" style={{
              color: C.red, fontWeight: 700, textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}>Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
