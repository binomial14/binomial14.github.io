// components/BlogList.tsx
"use client";
import { useMemo, useState } from "react";

export default function BlogList({ posts }: { posts: any[] }) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p) => (p.tags || []).forEach((t: string) => s.add(t)));
    return Array.from(s);
  }, [posts]);

  const filtered = tag ? posts.filter((p) => (p.tags || []).includes(tag)) : posts;

  return (
    <div className="mt-4">
      <div className="mb-4 flex gap-2 items-center">
        <span className="text-sm text-slate-600">Filter:</span>
        <button onClick={() => setTag(null)} className={`px-2 py-1 rounded ${tag ? "bg-slate-100" : "bg-sky-100"}`}>All</button>
        {tags.map((t) => (
          <button key={t} onClick={() => setTag(t)} className={`px-2 py-1 rounded ${tag === t ? "bg-sky-200" : "bg-slate-100"}`}>{t}</button>
        ))}
      </div>

      <ul className="space-y-3">
        {filtered.map((p) => (
          <li key={p.slug}>
            <a className="text-sky-600 hover:underline" href={`/blog/${p.slug}`}>[{p.date}] {p.title}</a>
            <div className="text-xs text-slate-500">{p.summary}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
