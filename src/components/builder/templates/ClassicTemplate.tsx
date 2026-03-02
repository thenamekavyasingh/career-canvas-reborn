import { ResumeData } from "@/types/resume";
import { Phone, Mail, Globe } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-1">
    <h2
      style={{
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        borderBottom: "1.5px solid #1a1a1a",
        paddingBottom: "2px",
        fontVariant: "small-caps",
        fontFamily: "'Times New Roman', Georgia, serif",
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
        fontFamily: "'Times New Roman', Georgia, serif",
        fontSize: "10px",
        lineHeight: "1.35",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "4px" }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "2px",
            fontVariant: "small-caps",
            fontFamily: "'Times New Roman', Georgia, serif",
            marginBottom: "3px",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        {personal.title && (
          <p style={{ fontSize: "10px", marginBottom: "2px" }}>{personal.title}</p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontSize: "9px",
            flexWrap: "wrap",
          }}
        >
          {personal.phone && (
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Phone style={{ width: "8px", height: "8px" }} /> {personal.phone}
            </span>
          )}
          {personal.email && (
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Mail style={{ width: "8px", height: "8px" }} /> {personal.email}
            </span>
          )}
          {personal.linkedin && (
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.github}
            </span>
          )}
          {personal.leetcode && (
            <span style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.leetcode}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu) => (
            <div key={edu.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "3px" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>•{edu.institution}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px", paddingLeft: "8px" }}>{edu.degree}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                <p style={{ fontSize: "9.5px" }}>{edu.endDate}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px" }}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Personal Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>
                  •{proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span style={{ fontWeight: 400, marginLeft: "8px", fontSize: "9.5px" }}>
                      {proj.sourceLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && <span style={{ margin: "0 4px" }}>·</span>}
                      {proj.liveLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic" }}>{proj.date}</p>}
              </div>
              {proj.subtitle && (
                <p style={{ fontSize: "9.5px", fontStyle: "italic", paddingLeft: "8px" }}>{proj.subtitle}</p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "8px", marginTop: "1px" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5px", marginBottom: "1px" }}>– {b}</li>
                ))}
              </ul>
              {proj.techStack && (
                <p style={{ fontSize: "9.5px", paddingLeft: "8px", marginTop: "1px" }}>
                  <span style={{ fontWeight: 600 }}>Tech Stack:</span> {proj.techStack}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Technical Skills and Interests</SectionTitle>
          <div>
            {skills.map((s) => (
              <p key={s.id} style={{ fontSize: "9.5px", marginBottom: "1px" }}>
                <span style={{ fontWeight: 700 }}>{s.category}:</span> {s.items}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Achievements</SectionTitle>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            {achievements.filter(Boolean).map((a, i) => (
              <li key={i} style={{ fontSize: "9.5px", marginBottom: "1px" }}>•{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos) => (
            <div key={pos.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px" }}>
              <p style={{ fontSize: "9.5px" }}>
                •<span style={{ fontWeight: 700 }}>{pos.title}</span> {pos.organization}
              </p>
              <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic", color: "#0066cc" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
