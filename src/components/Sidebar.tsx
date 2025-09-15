// components/Sidebar.tsx
"use client";
import Link from "next/link";
import ContactLinks from "./ContactLinks";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r p-6 flex flex-col gap-4">
      <img src="/images/profile.png" alt="Leo" className="w-36 h-36 rounded-full mx-auto" />
      <div className="text-center">
        <h2 className="font-bold text-lg">Liang-Yuan “Leo” Wu</h2>
        <p className="text-sm text-slate-600">Sound · AI · Accessibility</p>
      </div>

      <nav className="mt-4 flex flex-col gap-2">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        {/* <Link href="/publications">Publications</Link> */}
      </nav>

      <ContactLinks />
    </aside>
  );
}
