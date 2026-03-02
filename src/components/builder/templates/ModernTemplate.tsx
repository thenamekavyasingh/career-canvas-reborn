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
        borderBottom: "1.5px solid #2c3e50",
        paddingBottom: "1px",
        color: "#2c3e50",
        fontFamily: "'Times New Roman', Georgia, serif",
      }}
    >
      {children}
    </h2>
  </div>
);

const ModernTemplate = ({ data }: { data: ResumeData }) => {
  const { personal, education, projects, skills, achievements, positions } = data;

  return (
    <div
      style={{
        fontFamily: "'Times New Roman', Georgia, serif",
        fontSize: "10px",
        lineHeight: "1.3",
        color: "#1a1a1a",
      }}
    >
      {/* Header */}
      <div style={{ borderBottom: "2px solid #2c3e50", paddingBottom: "4px", marginBottom: "4px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          {data.logoUrl && (
            <img
              src={data.logoUrl}
              alt="Logo"
              style={{ width: "48px", height: "48px", objectFit: "contain" }}
            />
          )}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "19px",
                fontWeight: 700,
                color: "#2c3e50",
                fontFamily: "'Times New Roman', Georgia, serif",
                marginBottom: "1px",
                lineHeight: "1.2",
              }}
            >
              {personal.name || "Your Name"}
            </h1>
            {personal.title && (
              <p style={{ fontSize: "10px", color: "#555", marginBottom: "2px" }}>{personal.title}</p>
            )}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "9px",
            flexWrap: "wrap",
            marginTop: "2px",
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
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color: "#0066cc" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.linkedin}
            </span>
          )}
          {personal.github && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color: "#0066cc" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.github}
            </span>
          )}
          {personal.leetcode && (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "2px", color: "#0066cc" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.leetcode}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div style={{ marginTop: "3px" }}>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu) => (
            <div key={edu.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "2px", paddingLeft: "2px" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>{edu.institution}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px", color: "#444" }}>{edu.degree}</p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "12px" }}>
                <p style={{ fontSize: "9.5px", fontWeight: 600 }}>{edu.startDate} – {edu.endDate}</p>
                <p style={{ fontSize: "9px", color: "#555" }}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginTop: "3px" }}>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "4px", paddingLeft: "2px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>
                  {proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span style={{ fontWeight: 400, marginLeft: "6px", fontSize: "9px" }}>
                      {proj.sourceLink && <span style={{ color: "#0066cc" }}>{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && <span style={{ margin: "0 3px" }}>|</span>}
                      {proj.liveLink && <span style={{ color: "#0066cc" }}>{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && <p style={{ fontSize: "9px", flexShrink: 0, marginLeft: "12px", color: "#555" }}>{proj.date}</p>}
              </div>
              <ul style={{ listStyleType: "disc", paddingLeft: "14px", margin: "1px 0 0 0" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.3" }}>{b}</li>
                ))}
              </ul>
              {proj.techStack && (
                <p style={{ fontSize: "9px", marginTop: "1px", paddingLeft: "2px" }}>
                  <span style={{ fontWeight: 700, color: "#2c3e50" }}>Tech:</span> {proj.techStack}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginTop: "3px" }}>
          <SectionTitle>Skills</SectionTitle>
          <div style={{ paddingLeft: "2px" }}>
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
        <div style={{ marginTop: "3px" }}>
          <SectionTitle>Achievements</SectionTitle>
          <ul style={{ listStyleType: "disc", paddingLeft: "14px", margin: 0 }}>
            {achievements.filter(Boolean).map((a, i) => (
              <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.35" }}>{a}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div style={{ marginTop: "3px" }}>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos) => (
            <div key={pos.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1px", paddingLeft: "2px" }}>
              <div>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>{pos.title}</p>
                <p style={{ fontStyle: "italic", fontSize: "9.5px", color: "#444" }}>{pos.organization}</p>
              </div>
              <p style={{ fontSize: "9px", flexShrink: 0, marginLeft: "12px", color: "#555" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ModernTemplate;
