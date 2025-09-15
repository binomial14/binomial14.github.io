import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ProjectsGrid from "@/components/ProjectsGrid";

type ProjectMeta = {
  title: string;
  summary: string;
  tags?: string[];
  image?: string;
  slug: string;
  date: string; // add date
};

export default function ProjectsPage() {
  const projectsDir = path.join(process.cwd(), "content/projects");
  const files = fs.readdirSync(projectsDir);

  const projects: ProjectMeta[] = files
    .map((file) => {
      const slug = file.replace(".md", "");
      const filePath = path.join(projectsDir, file);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);
      return { ...data, slug } as ProjectMeta;
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime() // newest first
    );

  return (
    <div>
      <h1 className="text-2xl font-bold">Projects</h1>
      <ProjectsGrid projects={projects} />
    </div>
  );
}
