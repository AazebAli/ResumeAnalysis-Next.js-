// 'use client';

// import Link from 'next/link';
// import { useEffect, useRef } from 'react';

// function AnimatedParticles() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     canvas.width = window.innerWidth * 2;
//     canvas.height = window.innerHeight * 2;
//     ctx.scale(2, 2);
//     const w = window.innerWidth, h = window.innerHeight;
//     const colors = ['#2B9064', '#F75756', '#FFD99E', '#000000'];
//     const particles = Array.from({ length: 25 }, () => ({
//       x: Math.random() * w, y: Math.random() * h,
//       vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
//       r: Math.random() * 3 + 1.5, color: colors[Math.floor(Math.random() * 4)],
//     }));
//     let id: number;
//     function draw() {
//       if (!ctx || !canvas) return;
//       ctx.clearRect(0, 0, w, h);
//       particles.forEach(p => {
//         p.x += p.vx; p.y += p.vy;
//         if (p.x < 0 || p.x > w) p.vx *= -1;
//         if (p.y < 0 || p.y > h) p.vy *= -1;
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color; ctx.globalAlpha = 0.4; ctx.fill(); ctx.globalAlpha = 1;
//       });
//       ctx.strokeStyle = '#000'; ctx.globalAlpha = 0.06; ctx.lineWidth = 1;
//       for (let i = 0; i < particles.length; i++)
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
//           if (Math.sqrt(dx * dx + dy * dy) < 100) { ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke(); }
//         }
//       ctx.globalAlpha = 1;
//       id = requestAnimationFrame(draw);
//     }
//     draw();
//     return () => cancelAnimationFrame(id);
//   }, []);
//   return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
// }

// export default function LandingPage() {
//   return (
//     <div className="min-h-screen bg-[#F9F5EA] relative">
//       <AnimatedParticles />

//       {/* NAV */}
//       <nav className="nav-bar relative z-10 bg-[#F5E6CF]">
//         <div className="w-20 h-20 bg-[#F5E6CF] border-2 border-black flex items-center justify-center hover:scale-110 hover:rotate-12 transition-transform duration-300">
//           <span className="text-2xl font-bold">RA</span>
//         </div>

//         <div className="flex items-center gap-0">
//           <Link href="/login" className="nav-link-item" style={{ color: '#BF0000' }}>
//             Find Jobs <span className="ml-1 inline-block" style={{ animation: 'bounce 1s infinite' }}>→</span>
//           </Link>
//           <Link href="/login" className="nav-link-item">Resume Analysis</Link>
//           <Link href="/login" className="nav-link-item">About Us</Link>
//         </div>

//         <Link href="/login">
//           <div className="w-20 h-20 flex items-center justify-center group cursor-pointer">
//             <svg width="53.33" height="53.33" viewBox="0 0 53.33 53.33" fill="none"
//               className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
//               <circle cx="26.67" cy="20" r="10" stroke="black" strokeWidth="2" fill="none"/>
//               <path d="M5 53.33c0-13.33 10-26.67 21.67-26.67 11.66 0 21.66 13.34 21.66 26.67" stroke="black" strokeWidth="2" fill="none"/>
//             </svg>
//           </div>
//         </Link>
//       </nav>

//       {/* HERO */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
//         <div className="py-20" style={{ animation: 'fadeInUp 0.8s ease-out' }}>
//           <h1 className="text-5xl md:text-6xl font-mono mb-6 tracking-tight">
//             Resume AI Analyzer
//           </h1>
//           <p className="text-xl text-[#615D5A] max-w-2xl mx-auto leading-relaxed">
//             Upload your resume, search for jobs using real-time listings, and get AI-powered match analysis to land your next role.
//           </p>
//           <div className="flex justify-center gap-4 mt-10">
//             <Link href="/login" className="px-10 py-4 bg-[rgba(255,217,158,0.8)] border-2 border-black text-lg font-mono shadow-[0px_4px_6px_0px_rgba(0,0,0,0.25)] hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">Get Started</Link>
//             <Link href="/login" className="px-10 py-4 bg-white border-2 border-black text-lg font-mono hover:translate-x-[-3px] hover:translate-y-[-3px] transition-all">Learn More</Link>
//           </div>
//         </div>

//         {/* FEATURES */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           {[
//             { title: 'Upload Resume', desc: 'Drag & drop your PDF resume. We securely store and extract your skills and experience.', color: '#BF0000' },
//             { title: 'Find Jobs', desc: 'Search thousands of real-time job listings using Firecrawl. Filter by title and location.', color: '#2B9064' },
//             { title: 'AI Analysis', desc: 'Get a match score, missing keywords, and AI suggestions using Google Gemini to optimize your resume.', color: '#F75756' },
//           ].map((f) => (
//             <div key={f.title} className="bg-white border-2 border-black p-8 text-center hover:translate-y-[-6px] transition-all duration-300 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] group">
//               <div className="w-14 h-14 mx-auto mb-4 border-2 border-black rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" style={{ background: f.color + '18' }}>
//                 <div className="w-5 h-5 rounded-full" style={{ background: f.color }} />
//               </div>
//               <h3 className="text-xl font-semibold mb-2" style={{ color: f.color }}>{f.title}</h3>
//               <p className="text-sm text-[#615D5A] leading-relaxed">{f.desc}</p>
//             </div>
//           ))}
//         </div>

//         {/* ABOUT PROJECT */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-mono mb-8">About This Project</h2>
//           <p className="text-base text-[#615D5A] max-w-3xl mx-auto leading-relaxed">
//             This platform helps job seekers optimize their resumes using artificial intelligence. 
//             Upload your PDF resume, search through live job listings aggregated via Firecrawl, 
//             and get a detailed match analysis powered by Google Gemini AI. 
//             Our system identifies missing keywords, calculates a match score, and provides 
//             actionable suggestions to improve your resume for each specific job application.
//           </p>
//         </div>

//         {/* HOW IT WORKS */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-mono mb-10">How It Works</h2>
//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { step: '1', title: 'Upload', desc: 'Upload your PDF resume' },
//               { step: '2', title: 'Search', desc: 'Find relevant job listings' },
//               { step: '3', title: 'Analyze', desc: 'Get AI match analysis' },
//               { step: '4', title: 'Optimize', desc: 'Improve your resume' },
//             ].map((s) => (
//               <div key={s.step} className="text-center">
//                 <div className="w-14 h-14 mx-auto bg-[#F5E6CF] border-2 border-black flex items-center justify-center text-2xl font-bold mb-4">{s.step}</div>
//                 <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
//                 <p className="text-sm text-[#615D5A]">{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <footer className="nav-bar relative z-10 bg-[#F5E6CF]">
//         <div className="text-2xl font-mono">Contact Us</div>
//         <div className="text-base text-center">
//           aazebalimalik@gmail.com<br/>+92 3357864786
//         </div>
//         <div className="text-base text-center">
//           eiman051204@gmail.com<br/>+92 133888544
//         </div>
//       </footer>

//       <style>{`
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes bounce { 0%,100% { transform: translateX(0); } 50% { transform: translateX(6px); } }
//       `}</style>
//     </div>
//   );
// }
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

function AnimatedParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    ctx.scale(2, 2);
    const w = window.innerWidth, h = window.innerHeight;
    const colors = ['#2B9064', '#F75756', '#D4A84B', '#BF0000'];
    const particles = Array.from({ length: 28 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.38, vy: (Math.random() - 0.5) * 0.38,
      r: Math.random() * 2.5 + 1.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    let id: number;
    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.32;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      ctx.strokeStyle = '#7A6A50';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.globalAlpha = 0.06 * (1 - dist / 110);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;
      id = requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100vw', height: '100vh',
        pointerEvents: 'none', zIndex: 0,
      }}
    />
  );
}

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

function ShadowBox({
  children, style, onMouseEnter, onMouseLeave,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      style={{
        border: `2px solid ${C.ink}`,
        boxShadow: `4px 4px 0 ${C.ink}`,
        transition: 'transform 0.18s, box-shadow 0.18s',
        ...style,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
}

const features = [
  { label: 'Upload Resume', desc: 'Drag & drop your PDF. We extract your skills, experience, and keywords automatically.', accent: C.red, num: '01' },
  { label: 'Find Jobs', desc: 'Search thousands of live listings via Firecrawl, filtered by role and location.', accent: C.green, num: '02' },
  { label: 'AI Analysis', desc: 'Get a match score, gap analysis, and Gemini-powered suggestions tailored per job.', accent: C.coral, num: '03' },
];

const steps = [
  { n: '1', title: 'Upload', sub: 'Your PDF resume' },
  { n: '2', title: 'Search', sub: 'Live job listings' },
  { n: '3', title: 'Analyze', sub: 'AI match report' },
  { n: '4', title: 'Optimize', sub: 'Land interviews' },
];

function hoverShadow(el: HTMLElement, enter: boolean) {
  el.style.transform = enter ? 'translate(-3px,-3px)' : 'none';
  el.style.boxShadow = enter ? `7px 7px 0 ${C.ink}` : `4px 4px 0 ${C.ink}`;
}

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: C.bg, position: 'relative', overflowX: 'hidden' }}>
      <AnimatedParticles />

      {/* NAV */}
      <nav style={{
        position: 'relative', zIndex: 10,
        background: C.nav,
        borderBottom: `2px solid ${C.ink}`,
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px', height: 72,
      }}>
        <div style={{
          width: 48, height: 48,
          border: `2px solid ${C.ink}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: C.cream,
          ...mono, fontWeight: 700, fontSize: 15, letterSpacing: 1, color: C.ink,
          cursor: 'pointer',
        }}>RA</div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {[
            { label: 'Find Jobs →', href: '/login', color: C.red },
            { label: 'Resume Analysis', href: '/login', color: C.ink },
            { label: 'About Us', href: '/login', color: C.ink },
          ].map(item => (
            <Link key={item.label} href={item.href} style={{
              textDecoration: 'none',
              color: item.color,
              ...mono, fontSize: 13, letterSpacing: '0.04em',
              fontWeight: item.color === C.red ? 700 : 400,
            }}>{item.label}</Link>
          ))}
        </div>

        <Link href="/login" style={{ textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            border: `2px solid ${C.ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: C.ink, background: 'transparent',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7.5 8-7.5S20 16 20 20" />
            </svg>
          </div>
        </Link>
      </nav>

      {/* HERO */}
      <section style={{
        position: 'relative', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center',
        padding: '88px 24px 72px',
        animation: 'fadeUp 0.85s ease-out both',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: `1.5px solid ${C.border}`,
          background: `${C.gold}20`,
          padding: '6px 18px', marginBottom: 40,
          ...mono, fontSize: 10, letterSpacing: '0.14em',
          color: C.muted, textTransform: 'uppercase',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: C.green, display: 'inline-block',
            animation: 'blink 2s ease-in-out infinite',
          }} />
          AI-Powered Resume Matching
        </div>

        {/* Title */}
        <h1 style={{
          ...serif,
          fontSize: 'clamp(56px, 9vw, 96px)',
          fontWeight: 700, color: C.ink,
          lineHeight: 1.04, letterSpacing: '-0.03em',
          margin: '0 0 28px',
        }}>
          Resume <span style={{ color: C.red }}>AI</span> Analyzer
        </h1>

        {/* Subtitle */}
        <p style={{
          ...mono, fontSize: 14, color: C.muted,
          lineHeight: 1.85, maxWidth: 460, margin: '0 0 44px',
        }}>
          Upload your resume, search live job listings, and get AI-powered match analysis to land your next role.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Get Started →', bg: `${C.gold}CC`, href: '/login' },
            { label: 'Learn More', bg: C.white, href: '/login' },
          ].map(btn => (
            <Link key={btn.label} href={btn.href} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  padding: '13px 36px',
                  background: btn.bg,
                  border: `2px solid ${C.ink}`,
                  boxShadow: `4px 4px 0 ${C.ink}`,
                  ...mono, fontSize: 13, fontWeight: 700,
                  color: C.ink, cursor: 'pointer',
                  letterSpacing: '0.05em',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => hoverShadow(e.currentTarget as HTMLElement, true)}
                onMouseLeave={e => hoverShadow(e.currentTarget as HTMLElement, false)}
              >
                {btn.label}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section style={{
        position: 'relative', zIndex: 10,
        maxWidth: 960, margin: '0 auto',
        padding: '0 32px 88px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 24,
      }}>
        {features.map(f => (
          <div
            key={f.num}
            style={{
              background: C.white,
              border: `2px solid ${C.ink}`,
              boxShadow: `4px 4px 0 ${C.ink}`,
              padding: '40px 28px 36px',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => hoverShadow(e.currentTarget as HTMLElement, true)}
            onMouseLeave={e => hoverShadow(e.currentTarget as HTMLElement, false)}
          >
            <div style={{
              width: 52, height: 52,
              border: `2px solid ${f.accent}`,
              background: `${f.accent}12`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              ...mono, fontSize: 13, fontWeight: 700, color: f.accent,
            }}>{f.num}</div>

            <h3 style={{
              ...mono, fontSize: 12, fontWeight: 700,
              color: f.accent, letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 14px',
            }}>{f.label}</h3>

            <p style={{
              ...mono, fontSize: 12, color: C.muted,
              lineHeight: 1.8, margin: 0,
            }}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* RULE */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: 560, margin: '0 auto 80px',
        display: 'flex', alignItems: 'center', gap: 12, padding: '0 32px',
      }}>
        <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.55 }} />
        <div style={{ width: 5, height: 5, background: C.border, borderRadius: '50%', opacity: 0.7 }} />
        <div style={{ flex: 1, height: 1, background: C.border, opacity: 0.55 }} />
      </div>

      {/* ABOUT */}
      <section style={{
        position: 'relative', zIndex: 10,
        maxWidth: 600, margin: '0 auto 88px',
        padding: '0 32px', textAlign: 'center',
      }}>
        <p style={{
          ...mono, fontSize: 10, fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: C.muted, marginBottom: 14,
        }}>About this project</p>

        <h2 style={{
          ...serif, fontSize: 30, fontWeight: 700,
          color: C.ink, margin: '0 0 20px', letterSpacing: '-0.01em',
        }}>Built for job seekers</h2>

        <p style={{ ...mono, fontSize: 13, color: C.muted, lineHeight: 1.95, margin: 0 }}>
          This platform helps job seekers optimize their resumes using artificial intelligence.
          Upload your PDF resume, search through live job listings aggregated via Firecrawl,
          and get a detailed match analysis powered by Google Gemini AI. Our system identifies
          missing keywords, calculates a match score, and provides actionable suggestions to
          improve your resume for each specific job application.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section style={{
        position: 'relative', zIndex: 10,
        maxWidth: 840, margin: '0 auto 88px',
        padding: '0 32px', textAlign: 'center',
      }}>
        <p style={{
          ...mono, fontSize: 10, fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: C.muted, marginBottom: 14,
        }}>How it works</p>

        <h2 style={{
          ...serif, fontSize: 30, fontWeight: 700,
          color: C.ink, margin: '0 0 52px', letterSpacing: '-0.01em',
        }}>Four steps to your next role</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: 27, left: '12.5%', right: '12.5%',
            height: 1, background: C.border, opacity: 0.4, zIndex: 0,
          }} />

          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative', zIndex: 1,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              padding: '0 16px',
            }}>
              <div
                style={{
                  width: 54, height: 54,
                  border: `2px solid ${C.ink}`,
                  background: i % 2 === 0 ? C.cream : C.white,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                  ...serif, fontSize: 20, fontWeight: 700, color: C.ink,
                  cursor: 'default',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.1) rotate(-4deg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >{s.n}</div>

              <p style={{ ...mono, fontSize: 12, fontWeight: 700, color: C.ink, margin: '0 0 4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {s.title}
              </p>
              <p style={{ ...mono, fontSize: 11, color: C.muted, lineHeight: 1.6, margin: 0 }}>
                {s.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{
        position: 'relative', zIndex: 10,
        maxWidth: 900, margin: '0 auto 88px',
        padding: '0 32px',
      }}>
        <div style={{
          background: C.cream,
          border: `2px solid ${C.ink}`,
          boxShadow: `6px 6px 0 ${C.ink}`,
          padding: '52px 40px',
          textAlign: 'center',
        }}>
          <h2 style={{
            ...serif, fontSize: 34, fontWeight: 700,
            color: C.ink, margin: '0 0 12px', letterSpacing: '-0.02em',
          }}>Ready to get matched?</h2>

          <p style={{ ...mono, fontSize: 13, color: C.muted, margin: '0 0 30px', lineHeight: 1.7 }}>
            Start free — upload your resume and find your fit in minutes.
          </p>

          <Link href="/login" style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'inline-block',
                padding: '13px 40px',
                background: C.red,
                border: `2px solid ${C.ink}`,
                boxShadow: `4px 4px 0 ${C.ink}`,
                ...mono, fontSize: 13, fontWeight: 700,
                color: C.white, cursor: 'pointer',
                letterSpacing: '0.06em',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => hoverShadow(e.currentTarget as HTMLElement, true)}
              onMouseLeave={e => hoverShadow(e.currentTarget as HTMLElement, false)}
            >
              Start Now →
            </div>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        position: 'relative', zIndex: 10,
        background: C.nav,
        borderTop: `2px solid ${C.ink}`,
        padding: '22px 40px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 12,
      }}>
        <span style={{ ...serif, fontSize: 18, fontWeight: 700, color: C.ink }}>Contact Us</span>
        <span style={{ ...mono, fontSize: 12, color: C.muted }}>
          aazebalimalik@gmail.com &nbsp;·&nbsp; +92 335 786 4786
        </span>
        <span style={{ ...mono, fontSize: 12, color: C.muted }}>
          eiman051204@gmail.com &nbsp;·&nbsp; +92 133 888 544
        </span>
      </footer>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(32px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
