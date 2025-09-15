// lib/posts.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  date: string;
  tags?: string[];
  summary?: string;
  image?: string;
  slug?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

export function listPosts(type: "blog" | "projects") {
  const dir = path.join(CONTENT_DIR, type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf8");
      const { data } = matter(raw);
      const slug = filename.replace(/\.mdx?$/, "");
      return { ...(data as PostMeta), slug };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function readPost(type: "blog" | "projects", slug: string) {
  const file = path.join(CONTENT_DIR, type, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return { meta: data as PostMeta, content };
}
