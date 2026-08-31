import { FolderGit2 } from "lucide-react";
import { ResumeData } from "@/data/resume";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProjectsSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.projects;
  const isRtl = resumeData.dir === "rtl";

  return (
    <section
      id="projects"
      className="section-shell"
      aria-label={header.title}
    >
      <div className="min-w-0 [&_h2]:[overflow-wrap:anywhere] [&_p]:[overflow-wrap:anywhere]">
        <SectionHeader
          eyebrow={header.eyebrow}
          title={header.title}
          description={header.description}
          icon={FolderGit2}
        />
      </div>
      <ol className="border-y border-slate-200/90 dark:border-white/12">
        {resumeData.projects.map((project, index) => (
          <li
            key={project.title}
            className="border-b border-slate-200/90 last:border-b-0 dark:border-white/12"
          >
            <ProjectCard
              project={project}
              index={index}
              outcomeLabel={isRtl ? "نتیجه" : "Outcome"}
              artifactLabel={isRtl ? "مشاهده پروژه" : "View project"}
              techLabel={isRtl ? "تکنولوژی‌ها" : "Tech stack"}
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
