import { Mail, Github, Linkedin, Twitter, GraduationCap, FileText } from "lucide-react";

export default function ContactLinks() {
  return (
    <ul className="mt-auto space-y-2 text-sm">
      <li>
        <a
          href="mailto:lyuanwu@umich.edu"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <Mail size={16} />
          <span>lyuanwu@umich.edu</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/binomial14"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <Github size={16} />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/binomial14/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <Linkedin size={16} />
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://scholar.google.com/citations?user=zfL37DoAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <GraduationCap size={16} />
          <span>Google Scholar</span>
        </a>
      </li>
      <li>
        <a
          href="https://x.com/binomial14wu"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <Twitter size={16} />
          <span>Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="/files/CV_20250915.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-600 transition-colors"
        >
          <FileText size={16}/>
          <span>CV</span>
        </a>
      </li>
    </ul>
  );
}
