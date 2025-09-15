// app/blog/[slug]/page.tsx
import { readPost } from "../../../lib/posts";
import { markdownToHtml } from "../../../lib/markdownToHtml";

type Props = { params: { slug: string } };

export default async function BlogPost({ params }: Props) {
  const data = readPost("blog", params.slug);
  if (!data) return <div>Not found</div>;
  const html = await markdownToHtml(data.content);
  return (
    <article className="prose max-w-none">
      <h1 className="text-2xl font-bold">{data.meta.title}</h1>
      <div className="text-sm text-slate-500">{data.meta.date}</div>
      <div dangerouslySetInnerHTML={{ __html: html }} className="mt-6" />
    </article>
  );
}
