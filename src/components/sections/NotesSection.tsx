import { ArrowUpRight, BookOpen, Lightbulb } from "lucide-react";
import type { ResumeData } from "@/data/resume";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function NotesSection({ resumeData }: { resumeData: ResumeData }) {
  const header = resumeData.ui.sectionHeaders.notes;
  const isRtl = resumeData.dir === "rtl";

  return (
    <section id="notes" className="section-shell" aria-label={header.title}>
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        description={header.description}
        icon={BookOpen}
      />

      <div className="notes-ledger">
        <div className="notes-ledger-intro">
          <p className="notes-ledger-label">
            {isRtl ? "دفترچه مهندسی" : "Engineering notebook"}
          </p>
          <p className="notes-ledger-copy">
            {isRtl
              ? "یادداشت‌های کوتاه برای تصمیم‌های بهتر در کد و محصول."
              : "Short entries for making better decisions in code and product."}
          </p>
          <div className="notes-ledger-mark" aria-hidden="true">
            <span>{String(resumeData.notes.length).padStart(2, "0")}</span>
            <small>{isRtl ? "یادداشت" : "entries"}</small>
          </div>
        </div>

        <ol className="notes-list">
          {resumeData.notes.map((note, index) => (
            <li key={note.title} className="notes-item">
              <article>
                <div className="notes-meta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{note.category}</span>
                  <span>{note.readTime}</span>
                </div>

                <div className="notes-content">
                  <h3>{note.title}</h3>
                  <p>{note.summary}</p>

                  <div className="notes-takeaway">
                    <Lightbulb className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <p>{note.takeaway}</p>
                  </div>

                  <div className="notes-footer">
                    <ul aria-label={isRtl ? "موضوع‌ها" : "Topics"}>
                      {note.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
