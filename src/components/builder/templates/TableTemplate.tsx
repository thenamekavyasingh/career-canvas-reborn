import { ResumeData } from "@/types/resume";
import { Phone, Mail, Globe } from "lucide-react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginBottom: "4px" }}>
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

const TableTemplate = ({ data }: { data: ResumeData }) => {
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
      {/* Header with logo */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "4px" }}>
        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt="Logo"
            style={{ width: "60px", height: "60px", objectFit: "contain" }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "'Times New Roman', Georgia, serif",
              marginBottom: "2px",
            }}
          >
            {personal.name || "Your Name"}
          </h1>
          {personal.title && (
            <p style={{ fontSize: "10px", marginBottom: "1px" }}>{personal.title}</p>
          )}
          {personal.location && (
            <p style={{ fontSize: "9.5px" }}>{personal.location}</p>
          )}
        </div>
        <div style={{ textAlign: "right", fontSize: "9px", lineHeight: "1.5" }}>
          {personal.phone && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
              <Phone style={{ width: "8px", height: "8px" }} /> {personal.phone}
            </div>
          )}
          {personal.email && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
              <Mail style={{ width: "8px", height: "8px" }} /> {personal.email}
            </div>
          )}
          {personal.leetcode && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.leetcode}
            </div>
          )}
          {personal.linkedin && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.linkedin}
            </div>
          )}
          {personal.github && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "3px" }}>
              <Globe style={{ width: "8px", height: "8px" }} /> {personal.github}
            </div>
          )}
        </div>
      </div>

      {/* Education as table */}
      {education.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Education</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9.5px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <th style={{ textAlign: "left", padding: "2px 4px", fontWeight: 700 }}>Degree/Certificate</th>
                <th style={{ textAlign: "center", padding: "2px 4px", fontWeight: 700 }}>Institute/Board</th>
                <th style={{ textAlign: "center", padding: "2px 4px", fontWeight: 700 }}>CGPA/Percentage</th>
                <th style={{ textAlign: "center", padding: "2px 4px", fontWeight: 700 }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu) => (
                <tr key={edu.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "2px 4px" }}>{edu.degree}</td>
                  <td style={{ textAlign: "center", padding: "2px 4px" }}>{edu.institution}</td>
                  <td style={{ textAlign: "center", padding: "2px 4px" }}>{edu.grade}</td>
                  <td style={{ textAlign: "center", padding: "2px 4px" }}>{edu.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "6px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>
                  • {proj.title}
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
              {proj.techStack && (
                <p style={{ fontSize: "9px", fontStyle: "italic", paddingLeft: "12px", marginBottom: "1px" }}>
                  Tools: [{proj.techStack}]
                </p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "12px", marginTop: "1px" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5px", marginBottom: "1px" }}>◦ {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginTop: "6px" }}>
          <SectionTitle>Skills</SectionTitle>
          <div>
            {skills.map((s) => (
              <p key={s.id} style={{ fontSize: "9.5px", marginBottom: "1px" }}>
                <span style={{ fontWeight: 700 }}>{s.category}:</span> [{s.items}]
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
              <li key={i} style={{ fontSize: "9.5px", marginBottom: "1px" }}>• {a}</li>
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
                • <span style={{ fontWeight: 700 }}>{pos.title},</span> {pos.organization}
              </p>
              <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic", color: "#0066cc" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableTemplate;
