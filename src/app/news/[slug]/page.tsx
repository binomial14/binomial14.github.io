// app/news/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const newsDir = path.join(process.cwd(), "content/news");
  const files = fs.readdirSync(newsDir);
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default async function NewsPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/news", slug + ".md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await remark().use(html).process(content);

  return (
    <article className="prose max-w-3xl mx-auto">
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml.toString() }} />
    </article>
  );
}
