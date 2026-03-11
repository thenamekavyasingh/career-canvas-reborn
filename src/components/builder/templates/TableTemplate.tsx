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

const TableTemplate = ({ data }: { data: ResumeData }) => {
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
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "4px" }}>
        {data.logoUrl && (
          <img src={data.logoUrl} alt="Logo" style={{ width: "52px", height: "52px", objectFit: "contain" }} />
        )}
        <div style={{ flex: 1 }}>
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 700,
              fontFamily: "'Times New Roman', 'CMU Serif', Georgia, serif",
              marginBottom: "2px",
              lineHeight: "1.2",
            }}
          >
            {personal.name || "Your Name"}
          </h1>
          {personal.title && <p style={{ fontSize: "11px", marginBottom: "1px" }}>{personal.title}</p>}
          {personal.location && <p style={{ fontSize: "9.5px" }}>{personal.location}</p>}
        </div>
        <div style={{ textAlign: "right", fontSize: "9.5px", lineHeight: "1.6" }}>
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

      {/* Education */}
      {education.length > 0 && (
        <div>
          <SectionTitle>Education</SectionTitle>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #666" }}>
                <th style={{ textAlign: "left", padding: "3px 4px", fontWeight: 700, fontSize: "9.5px" }}>Degree / Certificate</th>
                <th style={{ textAlign: "center", padding: "3px 4px", fontWeight: 700, fontSize: "9.5px" }}>Institute / Board</th>
                <th style={{ textAlign: "center", padding: "3px 4px", fontWeight: 700, fontSize: "9.5px" }}>CGPA / %</th>
                <th style={{ textAlign: "center", padding: "3px 4px", fontWeight: 700, fontSize: "9.5px" }}>Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map((edu) => (
                <tr key={edu.id} style={{ borderBottom: "1px solid #ddd" }}>
                  <td style={{ padding: "3px 4px", fontSize: "10px" }}>{edu.degree}</td>
                  <td style={{ textAlign: "center", padding: "3px 4px", fontSize: "10px" }}>{edu.institution}</td>
                  <td style={{ textAlign: "center", padding: "3px 4px", fontSize: "10px" }}>{edu.grade}</td>
                  <td style={{ textAlign: "center", padding: "3px 4px", fontSize: "10px" }}>{edu.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <SectionTitle>Projects</SectionTitle>
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
              {proj.techStack && (
                <p style={{ fontSize: "9.5px", fontStyle: "italic", paddingLeft: "10px", margin: "1px 0" }}>
                  Tools: [{proj.techStack}]
                </p>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: "10px", margin: "2px 0 0 0" }}>
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li key={i} style={{ fontSize: "10px", lineHeight: "1.45" }}>◦ {b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div>
          <SectionTitle>Skills</SectionTitle>
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
                • <span style={{ fontWeight: 700 }}>{pos.title},</span> {pos.organization}
              </p>
              <p style={{ fontSize: "9.5px", flexShrink: 0, marginLeft: "16px", fontStyle: "italic" }}>{pos.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TableTemplate;
