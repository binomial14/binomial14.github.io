// app/blog/page.tsx
import { listPosts } from "../../lib/posts";
import BlogList from "@/components/BlogList";

export default function BlogPage() {
  const posts = listPosts("blog");
  return (
    <div>
      <h1 className="text-2xl font-bold">Double Origins</h1>
      <BlogList posts={posts} />
    </div>
  );
}
