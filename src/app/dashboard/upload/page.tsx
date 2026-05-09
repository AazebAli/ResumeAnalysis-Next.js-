// 'use client';

// import { useState, useRef } from 'react';
// import { useRouter } from 'next/navigation';

// export default function UploadPage() {
//   const [file, setFile] = useState<File | null>(null);
//   const [uploading, setUploading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const fileRef = useRef<HTMLInputElement>(null);
//   const router = useRouter();

//   const handleUpload = async () => {
//     if (!file) return;
//     setUploading(true);
//     const fd = new FormData();
//     fd.append('file', file);
//     try {
//       const res = await fetch('/api/upload', { method: 'POST', body: fd });
//       const data = await res.json();
//       if (res.ok) {
//         sessionStorage.setItem('resume_uploaded', 'true');
//         sessionStorage.setItem('resume_text', data.textContent || '');
//         setSuccess(true);
//       }
//     } catch (e) {
//       alert('Upload failed');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="max-w-[700px] mx-auto">
//       <h2 className="text-[30px] font-mono mb-2">Upload Resume</h2>
//       <p className="text-[18    px] text-[#615D5A] mb-8">Upload your PDF resume to get started</p>

//       <div className="border-2 border-dashed border-black p-12 text-center bg-white mb-6 hover:bg-[#F5E6CF]/30 transition-colors cursor-pointer" onClick={() => fileRef.current?.click()}>
//         <input ref={fileRef} type="file" accept=".pdf" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
//         {success ? (
//           <div className="space-y-3">
//             <div className="w-16 h-16 mx-auto rounded-full bg-[#2B9064]/20 border-2 border-[#2B9064] flex items-center justify-center">
//               <svg className="w-8 h-8 text-[#2B9064]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
//             </div>
//             <p className="text-[#2B9064] font-semibold text-lg">Uploaded successfully!</p>
//             <p className="text-sm text-[#615D5A]">{file?.name}</p>
//             <button onClick={() => router.push('/dashboard/find-jobs')} className="mt-4 px-6 py-3 border-2 border-black bg-[rgba(255,217,158,0.8)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">Find Jobs</button>
//           </div>
//         ) : (
//           <div className="space-y-3">
//             <svg className="w-16 h-16 mx-auto text-[#615D5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
//             </svg>
//             <p className="text-lg font-semibold">Drop your PDF here or click to browse</p>
//             <p className="text-sm text-[#615D5A]">Only PDF files accepted</p>
//           </div>
//         )}
//       </div>

//       {file && !success && (
//         <div className="flex items-center justify-between bg-white border-2 border-black p-4 mb-6">
//           <div className="flex items-center gap-3">
//             <svg className="w-8 h-8 text-[#615D5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
//             </svg>
//             <span className="text-sm">{file.name}</span>
//           </div>
//           <button onClick={handleUpload} disabled={uploading} className="px-6 py-3 bg-[rgba(255,217,158,0.8)] border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all disabled:opacity-50">
//             {uploading ? 'Uploading...' : 'Upload'}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

const C = {
  bg: '#F9F5EA',
  cream: '#F2E8D5',
  ink: '#1C1611',
  muted: '#7A6A50',
  border: '#C8B99A',
  green: '#2B9064',
  coral: '#F75756',
  gold: '#D4A84B',
  white: '#FFFFFF',
};

const mono: React.CSSProperties = { fontFamily: "'Courier New', Courier, monospace" };
const serif: React.CSSProperties = { fontFamily: "'Georgia', 'Times New Roman', serif" };

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    const fd = new FormData();
    fd.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd });
      const data = await res.json();
      if (res.ok) {
        sessionStorage.setItem('resume_uploaded', 'true');
        sessionStorage.setItem('resume_text', data.textContent || '');
        setSuccess(true);
      }
    } catch {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped?.type === 'application/pdf') setFile(dropped);
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ ...mono, fontSize: 10, color: C.muted, margin: '0 0 6px', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Step 01
        </p>
        <h2 style={{ ...serif, fontSize: 28, fontWeight: 700, color: C.ink, margin: '0 0 6px', letterSpacing: '-0.01em' }}>
          Upload Resume
        </h2>
        <p style={{ ...mono, fontSize: 12, color: C.muted, margin: 0 }}>
          Upload your PDF resume to get started
        </p>
      </div>

      {/* Drop zone */}
      <div
        onClick={() => !success && fileRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        style={{
          background: dragging ? `${C.gold}18` : C.white,
          border: `2px ${dragging ? 'solid' : 'dashed'} ${dragging ? C.gold : C.ink}`,
          boxShadow: dragging ? `4px 4px 0 ${C.gold}` : 'none',
          padding: '52px 40px',
          textAlign: 'center',
          cursor: success ? 'default' : 'pointer',
          marginBottom: 20,
          transition: 'all 0.15s',
        }}
      >
        <input
          ref={fileRef}
          type="file"
          accept=".pdf"
          style={{ display: 'none' }}
          onChange={e => setFile(e.target.files?.[0] || null)}
        />

        {success ? (
          /* ── Success state ── */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 56, height: 56,
              border: `2px solid ${C.green}`,
              background: `${C.green}12`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.green,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p style={{ ...mono, fontSize: 14, fontWeight: 700, color: C.green, margin: 0 }}>
              Uploaded successfully!
            </p>
            <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0 }}>
              {file?.name}
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <button
                onClick={e => { e.stopPropagation(); router.push('/dashboard/find-jobs'); }}
                style={{
                  padding: '10px 24px',
                  background: `${C.gold}CC`,
                  border: `2px solid ${C.ink}`,
                  boxShadow: `3px 3px 0 ${C.ink}`,
                  ...mono, fontSize: 12, fontWeight: 700,
                  color: C.ink, cursor: 'pointer',
                  letterSpacing: '0.05em',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
              >
                Find Jobs →
              </button>
              <button
                onClick={e => { e.stopPropagation(); router.push('/dashboard/analysis'); }}
                style={{
                  padding: '10px 24px',
                  background: C.white,
                  border: `2px solid ${C.ink}`,
                  boxShadow: `3px 3px 0 ${C.ink}`,
                  ...mono, fontSize: 12, fontWeight: 700,
                  color: C.ink, cursor: 'pointer',
                  letterSpacing: '0.05em',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
              >
                Analyze Resume →
              </button>
            </div>
          </div>
        ) : (
          /* ── Empty / idle state ── */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 56, height: 56,
              border: `2px solid ${C.border}`,
              background: C.cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.muted,
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
            </div>
            <div>
              <p style={{ ...mono, fontSize: 13, fontWeight: 700, color: C.ink, margin: '0 0 4px' }}>
                Drop your PDF here or click to browse
              </p>
              <p style={{ ...mono, fontSize: 11, color: C.muted, margin: 0 }}>
                Only PDF files accepted
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Selected file bar */}
      {file && !success && (
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 16,
          background: C.white,
          border: `2px solid ${C.ink}`,
          boxShadow: `3px 3px 0 ${C.ink}`,
          padding: '14px 20px',
          marginBottom: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* PDF icon */}
            <div style={{
              width: 36, height: 36,
              border: `2px solid ${C.border}`,
              background: C.cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.muted,
              flexShrink: 0,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
            </div>
            <div>
              <p style={{ ...mono, fontSize: 12, fontWeight: 700, color: C.ink, margin: 0 }}>
                {file.name}
              </p>
              <p style={{ ...mono, fontSize: 10, color: C.muted, margin: 0 }}>
                {(file.size / 1024).toFixed(0)} KB · PDF
              </p>
            </div>
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            style={{
              padding: '10px 24px',
              background: uploading ? `${C.gold}60` : `${C.gold}CC`,
              border: `2px solid ${C.ink}`,
              boxShadow: `3px 3px 0 ${C.ink}`,
              ...mono, fontSize: 12, fontWeight: 700,
              color: C.ink, cursor: uploading ? 'not-allowed' : 'pointer',
              letterSpacing: '0.05em',
              opacity: uploading ? 0.7 : 1,
              transition: 'transform 0.15s, box-shadow 0.15s',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
            onMouseEnter={e => { if (!uploading) { (e.currentTarget as HTMLElement).style.transform = 'translate(-2px,-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = `5px 5px 0 ${C.ink}`; } }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = `3px 3px 0 ${C.ink}`; }}
          >
            {uploading ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 12, height: 12,
                  border: `2px solid ${C.ink}30`,
                  borderTop: `2px solid ${C.ink}`,
                  borderRadius: '50%',
                  display: 'inline-block',
                  animation: 'spin 0.8s linear infinite',
                }} />
                Uploading...
              </span>
            ) : 'Upload →'}
          </button>
        </div>
      )}

      {/* Helper tip */}
      {!success && (
        <p style={{ ...mono, fontSize: 10, color: C.muted, margin: 0, lineHeight: 1.7 }}>
          Your resume text will be extracted and used for AI-powered job matching and analysis.
        </p>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
