// app/layout.tsx
import "./globals.css";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = { title: 'Liang-Yuan “Leo” Wu' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable}`}>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
        <div className="flex flex-1 overflow-hidden">
          <Sidebar /> 
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
