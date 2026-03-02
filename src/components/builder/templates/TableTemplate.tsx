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

const TableTemplate = ({ data }: { data: ResumeData }) => {
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
      {/* Header with logo */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "2px" }}>
        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt="Logo"
            style={{ width: "52px", height: "52px", objectFit: "contain" }}
          />
        )}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "'Times New Roman', Georgia, serif",
              marginBottom: "1px",
              lineHeight: "1.2",
            }}
          >
            {personal.name || "Your Name"}
          </h1>
          {personal.title && (
            <p style={{ fontSize: "10px", marginBottom: "0px" }}>{personal.title}</p>
          )}
          {personal.location && (
            <p style={{ fontSize: "9px" }}>{personal.location}</p>
          )}
        </div>
        <div style={{ textAlign: "right", fontSize: "9px", lineHeight: "1.45" }}>
          {personal.phone && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
              <Phone style={{ width: "7px", height: "7px" }} /> {personal.phone}
            </div>
          )}
          {personal.email && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
              <Mail style={{ width: "7px", height: "7px" }} /> {personal.email}
            </div>
          )}
          {personal.leetcode && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.leetcode}
            </div>
          )}
          {personal.linkedin && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.linkedin}
            </div>
          )}
          {personal.github && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "2px" }}>
              <Globe style={{ width: "7px", height: "7px" }} /> {personal.github}
            </div>
          )}
        </div>
      </div>

      {/* Education as table */}
      {education.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Education</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "9.5px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #999" }}>
                <th style={{ textAlign: "left", padding: "1px 3px", fontWeight: 700, fontSize: "9px" }}>Degree/Certificate</th>
                <th style={{ textAlign: "center", padding: "1px 3px", fontWeight: 700, fontSize: "9px" }}>Institute/Board</th>
                <th style={{ textAlign: "center", padding: "1px 3px", fontWeight: 700, fontSize: "9px" }}>CGPA/Percentage</th>
                <th style={{ textAlign: "center", padding: "1px 3px", fontWeight: 700, fontSize: "9px" }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu) => (
                <tr key={edu.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "1px 3px", fontSize: "9px" }}>{edu.degree}</td>
                  <td style={{ textAlign: "center", padding: "1px 3px", fontSize: "9px" }}>{edu.institution}</td>
                  <td style={{ textAlign: "center", padding: "1px 3px", fontSize: "9px" }}>{edu.grade}</td>
                  <td style={{ textAlign: "center", padding: "1px 3px", fontSize: "9px" }}>{edu.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "4px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <p style={{ fontWeight: 700, fontSize: "10px" }}>
                  • {proj.title}
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
              {proj.techStack && (
                <p style={{ fontSize: "8.5px", fontStyle: "italic", paddingLeft: "10px", margin: "0" }}>
                  Tools: [{proj.techStack}]
                </p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "10px", margin: "1px 0 0 0" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.3" }}>◦ {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div style={{ marginTop: "4px" }}>
          <SectionTitle>Skills</SectionTitle>
          <div>
            {skills.map((s) => (
              <p key={s.id} style={{ fontSize: "9.5px", lineHeight: "1.35" }}>
                <span style={{ fontWeight: 700 }}>{s.category}:</span> [{s.items}]
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
              <li key={i} style={{ fontSize: "9.5px", lineHeight: "1.35" }}>• {a}</li>
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
                • <span style={{ fontWeight: 700 }}>{pos.title},</span> {pos.organization}
              </p>
              <p style={{ fontSize: "9px", flexShrink: 0, marginLeft: "12px", fontStyle: "italic", color: "#0066cc" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableTemplate;
