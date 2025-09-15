import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "content/projects"));
  return files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

export default function ProjectPage({ params }: Props) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content/projects", slug + ".md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <article>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      {data.image && <img src={data.image} alt={data.title} className="float-left mr-6 mb-4 max-w-[600px] rounded object-contain" />}
      <p className="text-sm italic text-gray-500 mb-2 clear-left">{data.tags?.join(", ")}</p>
      <div className="mt-4">{content}</div>
    </article>
  );
}
