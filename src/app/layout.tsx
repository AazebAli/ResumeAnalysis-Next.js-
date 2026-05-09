import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume AI Analyzer & Job Matcher",
  description: "AI-powered resume analysis and job matching platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-bg-primary">
        {children}
      </body>
    </html>
  );
}