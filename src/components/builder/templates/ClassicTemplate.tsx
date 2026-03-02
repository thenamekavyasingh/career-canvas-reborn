import { ResumeData } from "@/types/resume";
import { Phone, Mail, Globe } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: "2px", marginTop: "1px" }}>
    <h2
      style={{
        fontSize: "10.5px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        borderBottom: "1px solid #000",
        paddingBottom: "1px",
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
        lineHeight: "1.3",
        color: "#000",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2px" }}>
        <h1
          style={{
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "1.5px",
            fontVariant: "small-caps",
            fontFamily: "'Times New Roman', Georgia, serif",
            marginBottom: "1px",
            lineHeight: "1.2",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        {personal.title && (
          <p style={{ fontSize: "10px", marginBottom: "1px" }}>{personal.title}</p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontSize: "9px",
            flexWrap: "wrap",
            lineHeight: "1.4",
          }}
        >
          {personal.phone && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <Phone style={{ width: "7px", height: "7px" }} /> {personal.phone}
            </span>
          )}
          {personal.email && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <Mail style={{ width: "7px", height: "7px" }} /> {personal.email}
            </span>
          )}
          {personal.linkedin && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.github}
            </span>
          )}
          {personal.leetcode && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.leetcode}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu) => (
            <div key={edu.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1px" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>•{edu.institution}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px", paddingLeft: "8px" }}>{edu.degree}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>
                <p style={{ fontSize: "9.5px" }}>{edu.endDate}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px" }}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Personal Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>
                  •{proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span style={{ fontWeight: 400, marginLeft: "6px", fontSize: "9px" }}>
                      {proj.sourceLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && <span style={{ margin: "0 3px" }}>·</span>}
                      {proj.liveLink && <span style={{ color: "#0066cc", fontStyle: "italic" }}>{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && <p style={{ fontSize: "9px", flexShrink: 0, marginLeft: "12px", fontStyle: "italic" }}>{proj.date}</p>}
              </div>
              {proj.subtitle && (
                <p style={{ fontSize: "9px", fontStyle: "italic", paddingLeft: "8px" }}>{proj.subtitle}</p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "8px", margin: "1px 0 0 0" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.3" }}>– {b}</li>
                ))}
              </ul>
              {proj.techStack && (
                <p style={{ fontSize: "9px", paddingLeft: "8px", marginTop: "1px" }}>
                  <span style={{ fontWeight: 600 }}>Tech Stack:</span> {proj.techStack}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Technical Skills and Interests</SectionTitle>
          <div>
            {skills.map((s) => (
              <p key={s.id} style={{ fontSize: "9.5px", lineHeight: "1.35" }}>
                <span style={{ fontWeight: 700 }}>{s.category}:</span> {s.items}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Achievements</SectionTitle>
          <ul style={{ listStyleType: "none", paddingLeft: "0", margin: 0 }}>
            {achievements.filter(Boolean).map((a, i) => (
              <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.35" }}>•{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos) => (
            <div key={pos.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1px" }}>
              <p style={{ fontSize: "9.5px" }}>
                •<span style={{ fontWeight: 700 }}>{pos.title}</span> {pos.organization}
              </p>
              <p style={{ fontSize: "9px", flexShrink: 0, marginLeft: "12px", fontStyle: "italic", color: "#0066cc" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
