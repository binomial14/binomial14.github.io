// app/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type NewsItem = {
  title: string;
  date: string;
  slug: string;
};

// 讀取 About.md 並轉成 HTML
async function getAboutContent() {
  const filePath = path.join(process.cwd(), "content/about.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const processed = await remark().use(html).process(fileContents);
  return processed.toString();
}

// 讀取 News
function getNewsItems(): NewsItem[] {
  const newsDir = path.join(process.cwd(), "content/news");
  const files = fs.readdirSync(newsDir);

  const news: NewsItem[] = files.map((file) => {
    const filePath = path.join(newsDir, file);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return { ...data, slug: file.replace(".md", "") } as NewsItem;
  });

  // 按日期排序（最新在上）
  news.sort((a, b) => (a.date < b.date ? 1 : -1));
  return news;
}

// App Router Page
export default async function HomePage() {
  const aboutContent = await getAboutContent();
  const news = getNewsItems();

  return (
    <div className="space-y-12">
      {/* About / Introduction */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">&lt;TODO&gt;</h2>
        <div
          className="max-w-3xl mx-auto text-justify space-y-4"
          dangerouslySetInnerHTML={{ __html: aboutContent }}
          style={{ marginLeft: 0 }}
        />
      </section>

      {/* News */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">News</h2>
        <div className="max-w-3xl max-h-80 overflow-y-auto border rounded p-4 space-y-2">
          {news.map((n) => (
            <div
              key={n.slug}
              className="flex items-start gap-4"
            >
              <div className="news-date w-24 text-gray-900 text-xs font-inter text-right">{n.date}</div>
              <div className="flex-1">
                <Link
                  href={`/news/${n.slug}`}
                  className="text-sky-900 hover:underline font-medium"
                >
                  {n.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
