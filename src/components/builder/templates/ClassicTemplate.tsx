import { ResumeData } from "@/types/resume";
import { Phone, Mail, Globe } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: "4px", marginTop: "8px" }}>
    <h2
      style={{
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        borderBottom: "1.2px solid #000",
        paddingBottom: "2px",
        fontFamily: "'Times New Roman', 'CMU Serif', Georgia, serif",
      }}
    >
      {children}
    </h2>
  </div>
);

const ClassicTemplate = ({ data }: { data: ResumeData }) => {
  const { personal, education, projects, skills, achievements, positions } = data;

  return (
    <div
      style={{
        fontFamily: "'Times New Roman', 'CMU Serif', Georgia, serif",
        fontSize: "10.5px",
        lineHeight: "1.45",
        color: "#000",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            fontFamily: "'Times New Roman', 'CMU Serif', Georgia, serif",
            marginBottom: "2px",
            lineHeight: "1.2",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        {personal.title && (
          <p style={{ fontSize: "11px", marginBottom: "3px", fontStyle: "italic" }}>{personal.title}</p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "9.5px",
            flexWrap: "wrap",
            lineHeight: "1.5",
          }}
        >
          {personal.phone && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Phone style={{ width: "8px", height: "8px" }} /> {personal.phone}
            </span>
          )}
          {personal.email && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Mail style={{ width: "8px", height: "8px" }} /> {personal.email}
            </span>
          )}
          {personal.linkedin && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.github}
            </span>
          )}
          {personal.leetcode && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.leetcode}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, idx) => (
            <div key={edu.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: idx < education.length - 1 ? "4px" : "0" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10.5px" }}>• {edu.institution}</p>
                <p style={{ fontStyle: "italic", fontSize: "10px", paddingLeft: "10px" }}>{edu.degree}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                <p style={{ fontSize: "10px" }}>{edu.endDate}</p>
                <p style={{ fontStyle: "italic", fontSize: "10px" }}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <SectionTitle>Personal Projects</SectionTitle>
          {projects.map((proj, idx) => (
            <div key={proj.id} style={{ marginBottom: idx < projects.length - 1 ? "6px" : "0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10.5px" }}>
                  • {proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span style={{ fontWeight: 400, marginLeft: "6px", fontSize: "9.5px" }}>
                      {proj.sourceLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && <span style={{ margin: "0 4px" }}>·</span>}
                      {proj.liveLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic" }}>{proj.date}</p>}
              </div>
              {proj.subtitle && (
                <p style={{ fontSize: "9.5px", fontStyle: "italic", paddingLeft: "10px" }}>{proj.subtitle}</p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "10px", margin: "2px 0 0 0" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "10px", lineHeight: "1.45" }}>– {b}</li>
                ))}
              </ul>
              {proj.techStack && (
                <p style={{ fontSize: "9.5px", paddingLeft: "10px", marginTop: "2px" }}>
                  <span style={{ fontWeight: 600 }}>Tech Stack:</span> {proj.techStack}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <SectionTitle>Technical Skills</SectionTitle>
          <div style={{ paddingLeft: "2px" }}>
            {skills.map((s) => (
              <p key={s.id} style={{ fontSize: "10px", lineHeight: "1.5", marginBottom: "1px" }}>
                <span style={{ fontWeight: 700 }}>{s.category}:</span> {s.items}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div>
          <SectionTitle>Achievements</SectionTitle>
          <ul style={{ listStyleType: "none", paddingLeft: "0", margin: 0 }}>
            {achievements.filter(Boolean).map((a, i) => (
              <li key={i} style={{ fontSize: "10px", lineHeight: "1.5", marginBottom: "2px" }}>• {a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos, idx) => (
            <div key={pos.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: idx < positions.length - 1 ? "3px" : "0" }}>
              <p style={{ fontSize: "10px" }}>
                • <span style={{ fontWeight: 700 }}>{pos.title}</span> — {pos.organization}
              </p>
              <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
