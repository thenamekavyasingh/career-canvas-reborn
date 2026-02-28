import { useResume } from "@/context/ResumeContext";
import { Phone, Mail, Globe } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-1.5">
    <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] border-b border-foreground/80 pb-0.5">
      {children}
    </h2>
  </div>
);

const ResumePreview = () => {
  const { data } = useResume();
  const { personal, education, projects, skills, achievements, positions } = data;

  return (
    <div
      id="resume-preview"
      className="bg-card mx-auto shadow-lg border border-border/50"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "12mm 14mm",
        fontFamily: "'Times New Roman', 'Georgia', serif",
        fontSize: "10.5px",
        lineHeight: "1.4",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <div className="text-center mb-1">
        <h1
          className="font-bold tracking-wider"
          style={{ fontSize: "22px", fontVariant: "small-caps", letterSpacing: "3px" }}
        >
          {personal.name || "Your Name"}
        </h1>
        <div className="flex items-center justify-center gap-3 mt-1 text-[9.5px] flex-wrap">
          {personal.phone && (
            <span className="flex items-center gap-0.5">
              <Phone className="w-2.5 h-2.5" /> {personal.phone}
            </span>
          )}
          {personal.email && (
            <span className="flex items-center gap-0.5">
              <Mail className="w-2.5 h-2.5" /> {personal.email}
            </span>
          )}
          {personal.linkedin && (
            <span className="flex items-center gap-0.5">
              <Globe className="w-2.5 h-2.5" /> {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span className="flex items-center gap-0.5">
              <Globe className="w-2.5 h-2.5" /> {personal.github}
            </span>
          )}
          {personal.leetcode && (
            <span className="flex items-center gap-0.5">
              <Globe className="w-2.5 h-2.5" /> {personal.leetcode}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mt-2">
          <SectionTitle>Education</SectionTitle>
          {education.map((edu) => (
            <div key={edu.id} className="flex justify-between items-start mb-1">
              <div>
                <p className="font-bold text-[10.5px]">{edu.institution}</p>
                <p className="italic text-[10px]">{edu.degree}</p>
              </div>
              <div className="text-right shrink-0 ml-4">
                <p className="text-[10px]">{edu.startDate} – {edu.endDate}</p>
                <p className="italic text-[10px]">{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-2">
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} className="mb-2">
              <div className="flex justify-between items-baseline">
                <p className="font-bold text-[10.5px]">
                  {proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span className="font-normal ml-2 text-[10px]">
                  {proj.sourceLink && <span className="text-accent underline">{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && <span className="mx-2">|</span>}
                      {proj.liveLink && <span className="text-accent underline">{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && <p className="text-[10px] shrink-0 ml-4">{proj.date}</p>}
              </div>
              <ul className="list-disc ml-4 mt-0.5 space-y-0.5">
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} className="text-[10px]">{b}</li>
                ))}
              </ul>
              {proj.techStack && (
                <p className="text-[10px] mt-0.5">
                  <span className="font-semibold">Tech Stack:</span> {proj.techStack}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-2">
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-0.5">
            {skills.map((s) => (
              <p key={s.id} className="text-[10px]">
                <span className="font-bold">{s.category}:</span> {s.items}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mt-2">
          <SectionTitle>Achievements</SectionTitle>
          <ul className="list-disc ml-4 space-y-0.5">
            {achievements.filter(Boolean).map((a, i) => (
              <li key={i} className="text-[10px]">{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div className="mt-2">
          <SectionTitle>Position of Responsibility</SectionTitle>
          {positions.map((pos) => (
            <div key={pos.id} className="flex justify-between items-start mb-1">
              <div>
                <p className="font-bold text-[10.5px]">{pos.organization}</p>
                <p className="italic text-[10px]">{pos.title}</p>
              </div>
              <p className="text-[10px] shrink-0 ml-4">{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResumePreview;
