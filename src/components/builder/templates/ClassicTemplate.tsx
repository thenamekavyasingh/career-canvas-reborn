import { ResumeData } from "@/types/resume";

const FONT = "'Source Sans 3', 'Inter', 'Helvetica Neue', Arial, sans-serif";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginTop: "14px", marginBottom: "6px" }}>
    <h2
      style={{
        fontSize: "13px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        borderBottom: "1px solid #000",
        paddingBottom: "3px",
        fontFamily: FONT,
        color: "#000",
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
        fontFamily: FONT,
        fontSize: "10.5px",
        lineHeight: "1.4",
        color: "#000",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2px" }}>
        {data.logoUrl && (
          <img
            src={data.logoUrl}
            alt="Logo"
            style={{
              width: "44px",
              height: "44px",
              objectFit: "contain",
              margin: "0 auto 4px",
              display: "block",
            }}
          />
        )}
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            fontFamily: FONT,
            marginBottom: "1px",
            lineHeight: "1.2",
            letterSpacing: "0.02em",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        {personal.title && (
          <p style={{ fontSize: "11px", marginBottom: "4px", color: "#333" }}>
            {personal.title}
          </p>
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0",
            fontSize: "10px",
            flexWrap: "wrap",
            color: "#333",
          }}
        >
          {[
            personal.phone,
            personal.email,
            personal.linkedin,
            personal.github,
            personal.leetcode,
          ]
            .filter(Boolean)
            .map((item, i, arr) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                {item}
                {i < arr.length - 1 && (
                  <span style={{ margin: "0 6px", color: "#888" }}>|</span>
                )}
              </span>
            ))}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: idx < education.length - 1 ? "6px" : "0",
              }}
            >
              <div>
                <p style={{ fontWeight: 700, fontSize: "10.5px" }}>{edu.degree}</p>
                <p style={{ fontSize: "10px", color: "#444", fontStyle: "italic" }}>
                  {edu.institution}
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0, marginLeft: "16px" }}>
                <p style={{ fontSize: "10px", fontWeight: 600 }}>
                  {edu.startDate} – {edu.endDate}
                </p>
                <p style={{ fontSize: "10px", color: "#444" }}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              style={{ marginBottom: idx < projects.length - 1 ? "8px" : "0" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <p style={{ fontWeight: 700, fontSize: "10.5px" }}>
                  {proj.title}
                  {(proj.sourceLink || proj.liveLink) && (
                    <span
                      style={{
                        fontWeight: 400,
                        marginLeft: "8px",
                        fontSize: "10px",
                        color: "#0055aa",
                      }}
                    >
                      {proj.sourceLink && <span>{proj.sourceLink}</span>}
                      {proj.sourceLink && proj.liveLink && (
                        <span style={{ margin: "0 4px", color: "#888" }}>|</span>
                      )}
                      {proj.liveLink && <span>{proj.liveLink}</span>}
                    </span>
                  )}
                </p>
                {proj.date && (
                  <p
                    style={{
                      fontSize: "10px",
                      flexShrink: 0,
                      marginLeft: "16px",
                      color: "#444",
                    }}
                  >
                    {proj.date}
                  </p>
                )}
              </div>
              <ul
                style={{
                  listStyleType: "disc",
                  paddingLeft: "18px",
                  margin: "3px 0 0 0",
                }}
              >
                {proj.bullets.filter(Boolean).map((b, i) => (
                  <li
                    key={i}
                    style={{ fontSize: "10px", lineHeight: "1.4", marginBottom: "2px" }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
              {proj.techStack && (
                <p style={{ fontSize: "10px", marginTop: "2px", paddingLeft: "18px" }}>
                  <span style={{ fontWeight: 700 }}>Tech Stack:</span> {proj.techStack}
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
          {skills.map((s) => (
            <p
              key={s.id}
              style={{
                fontSize: "10px",
                lineHeight: "1.5",
                marginBottom: "1px",
              }}
            >
              <span style={{ fontWeight: 700 }}>{s.category}:</span> {s.items}
            </p>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.filter(Boolean).length > 0 && (
        <div>
          <SectionTitle>Achievements</SectionTitle>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "18px",
              margin: 0,
            }}
          >
            {achievements.filter(Boolean).map((a, i) => (
              <li
                key={i}
                style={{
                  fontSize: "10px",
                  lineHeight: "1.45",
                  marginBottom: "3px",
                }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Positions */}
      {positions.length > 0 && (
        <div>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos, idx) => (
            <div
              key={pos.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: idx < positions.length - 1 ? "4px" : "0",
              }}
            >
              <p style={{ fontSize: "10px" }}>
                <span style={{ fontWeight: 700 }}>{pos.title}</span>
                <span style={{ color: "#444" }}> — {pos.organization}</span>
              </p>
              <p
                style={{
                  fontSize: "10px",
                  flexShrink: 0,
                  marginLeft: "16px",
                  color: "#444",
                }}
              >
                {pos.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
