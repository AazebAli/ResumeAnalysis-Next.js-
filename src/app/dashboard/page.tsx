// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function DashboardRedirect() {
//   const router = useRouter();
//   useEffect(() => {
//     router.replace('/dashboard/upload');
//   }, [router]);
//   return <div className="min-h-screen bg-[#F9F5EA] flex items-center justify-center text-[#615D5A]">Redirecting...</div>;
// }
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const C = { bg: '#F9F5EA', muted: '#7A6A50', ink: '#1C1611', gold: '#D4A84B' };
const mono: React.CSSProperties = { fontFamily: "'Courier New', Courier, monospace" };

export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/dashboard/upload');
  }, [router]);

  return (
    <div style={{
      minHeight: '100vh', background: C.bg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 16,
    }}>
      {/* Spinner */}
      <div style={{
        width: 40, height: 40,
        border: `2px solid ${C.gold}40`,
        borderTop: `2px solid ${C.gold}`,
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
      <p style={{ ...mono, fontSize: 12, color: C.muted, letterSpacing: '0.1em', margin: 0 }}>
        Redirecting...
      </p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
