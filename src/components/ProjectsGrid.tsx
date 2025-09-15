"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type ProjectMeta = {
  title: string;
  summary: string;
  tags?: string[];
  image?: string;
  slug: string;
};

export default function ProjectsGrid({ projects }: { projects: ProjectMeta[] }) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => (p.tags || []).forEach((t: string) => s.add(t)));
    return Array.from(s);
  }, [projects]);

  const filtered = tag ? projects.filter((p) => (p.tags || []).includes(tag)) : projects;

  return (
    <div>
      {/* Tag filter bar */}
      <div className="mb-4 flex gap-2 items-center">
        <span className="text-sm text-slate-600">Filter:</span>
        <button onClick={() => setTag(null)} className={`px-2 py-1 rounded ${tag ? "bg-slate-100" : "bg-sky-100"}`}>All</button>
        {tags.map((t) => (
          <button key={t} onClick={() => setTag(t)} className={`px-2 py-1 rounded ${tag === t ? "bg-sky-200" : "bg-slate-100"}`}>{t}</button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`}>
            <div className="border rounded p-4 hover:shadow-lg transition">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.title}
                  className="mb-2 w-full h-48 object-cover rounded"
                />
              )}
              <h2 className="text-xl font-semibold">{p.title}</h2>
              <p className="text-gray-600">{p.summary}</p>
              {p.tags && (
                <p className="mt-2 text-sm text-gray-500">
                  {p.tags.join(", ")}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
