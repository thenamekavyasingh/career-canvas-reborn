import { ResumeData } from "@/types/resume";

const FONT = "'Times New Roman', 'Computer Modern', 'CMU Serif', serif";

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <div style={{ marginTop: "10px", marginBottom: "4px" }}>
    <h2
      style={{
        fontSize: "13px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        borderBottom: "1px solid #000",
        paddingBottom: "2px",
        fontFamily: FONT,
        color: "#000",
        margin: 0,
      }}
    >
      {children}
    </h2>
  </div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul
    style={{
      listStyleType: "disc",
      paddingLeft: "14px",
      margin: "2px 0 0 0",
    }}
  >
    {items.filter(Boolean).map((item, i) => (
      <li
        key={i}
        style={{
          fontSize: "10px",
          lineHeight: "1.35",
          marginBottom: "3px",
          fontFamily: FONT,
        }}
      >
        {item}
      </li>
    ))}
  </ul>
);

const EducationEntry = ({ edu, isLast }: { edu: ResumeData["education"][0]; isLast: boolean }) => (
  <div
    style={{
      marginBottom: isLast ? "0" : "6px",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <p style={{ fontWeight: 700, fontSize: "10.5px", fontFamily: FONT, margin: 0 }}>
        {edu.institution}
      </p>
      <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0, flexShrink: 0, marginLeft: "16px" }}>
        {edu.startDate} – {edu.endDate}
      </p>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <p style={{ fontSize: "10px", fontFamily: FONT, fontStyle: "italic", margin: 0, color: "#222" }}>
        {edu.degree}
      </p>
      {edu.grade && (
        <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0, flexShrink: 0, marginLeft: "16px", color: "#222" }}>
          {edu.grade}
        </p>
      )}
    </div>
  </div>
);

const ProjectBlock = ({ proj, isLast }: { proj: ResumeData["projects"][0]; isLast: boolean }) => (
  <div style={{ marginBottom: isLast ? "0" : "6px" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <p style={{ fontWeight: 700, fontSize: "10.5px", fontFamily: FONT, margin: 0 }}>
        {proj.title}
        {proj.subtitle && (
          <span style={{ fontWeight: 400, fontStyle: "italic", marginLeft: "4px" }}>
            ({proj.subtitle})
          </span>
        )}
      </p>
      {proj.date && (
        <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0, flexShrink: 0, marginLeft: "16px" }}>
          {proj.date}
        </p>
      )}
    </div>
    {(proj.sourceLink || proj.liveLink) && (
      <p style={{ fontSize: "10px", fontFamily: FONT, margin: "1px 0 0 0", color: "#0055aa" }}>
        {proj.sourceLink && <span>{proj.sourceLink}</span>}
        {proj.sourceLink && proj.liveLink && (
          <span style={{ margin: "0 5px", color: "#888" }}>|</span>
        )}
        {proj.liveLink && <span>{proj.liveLink}</span>}
      </p>
    )}
    <BulletList items={proj.bullets} />
    {proj.techStack && (
      <p style={{ fontSize: "10px", fontFamily: FONT, margin: "2px 0 0 14px" }}>
        <span style={{ fontWeight: 700 }}>Tech Stack:</span> {proj.techStack}
      </p>
    )}
  </div>
);

const SkillGroup = ({ skill }: { skill: ResumeData["skills"][0] }) => (
  <p
    style={{
      fontSize: "10px",
      lineHeight: "1.45",
      marginBottom: "2px",
      fontFamily: FONT,
      margin: 0,
    }}
  >
    <span style={{ fontWeight: 700 }}>{skill.category}:</span> {skill.items}
  </p>
);

const PORItem = ({ pos, isLast }: { pos: ResumeData["positions"][0]; isLast: boolean }) => (
  <div
    style={{
      marginBottom: isLast ? "0" : "4px",
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
      <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0 }}>
        <span style={{ fontWeight: 700 }}>{pos.title}</span>
      </p>
      <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0, flexShrink: 0, marginLeft: "16px" }}>
        {pos.date}
      </p>
    </div>
    <p style={{ fontSize: "10px", fontFamily: FONT, margin: 0, color: "#222", fontStyle: "italic" }}>
      {pos.organization}
    </p>
  </div>
);

const ResumeHeader = ({ personal, logoUrl }: { personal: ResumeData["personal"]; logoUrl: string | null }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "4px",
      fontFamily: FONT,
    }}
  >
    {/* Left: Logo + Name block */}
    <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
      {logoUrl && (
        <img
          src={logoUrl}
          alt="Logo"
          style={{
            width: "48px",
            height: "48px",
            objectFit: "contain",
            marginTop: "2px",
          }}
        />
      )}
      <div>
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            fontFamily: FONT,
            margin: 0,
            lineHeight: "1.2",
          }}
        >
          {personal.name || "Your Name"}
        </h1>
        {personal.title && (
          <p style={{ fontSize: "11px", margin: "2px 0 0 0", color: "#222" }}>
            {personal.title}
          </p>
        )}
      </div>
    </div>

    {/* Right: Contact info stacked */}
    <div
      style={{
        textAlign: "right",
        fontSize: "10px",
        lineHeight: "1.55",
        color: "#222",
        flexShrink: 0,
      }}
    >
      {[personal.phone, personal.email, personal.leetcode, personal.linkedin, personal.github]
        .filter(Boolean)
        .map((item, i) => (
          <div key={i} style={{ fontFamily: FONT }}>{item}</div>
        ))}
    </div>
  </div>
);

const ClassicTemplate = ({ data }: { data: ResumeData }) => {
  const { personal, education, projects, skills, achievements, positions } = data;

  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize: "10.5px",
        lineHeight: "1.35",
        color: "#000",
      }}
    >
      <ResumeHeader personal={personal} logoUrl={data.logoUrl} />

      {education.length > 0 && (
        <div>
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, idx) => (
            <EducationEntry key={edu.id} edu={edu} isLast={idx === education.length - 1} />
          ))}
        </div>
      )}

      {projects.length > 0 && (
        <div>
          <SectionTitle>Projects</SectionTitle>
          {projects.map((proj, idx) => (
            <ProjectBlock key={proj.id} proj={proj} isLast={idx === projects.length - 1} />
          ))}
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <SectionTitle>Technical Skills</SectionTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {skills.map((s) => (
              <SkillGroup key={s.id} skill={s} />
            ))}
          </div>
        </div>
      )}

      {achievements.filter(Boolean).length > 0 && (
        <div>
          <SectionTitle>Achievements</SectionTitle>
          <BulletList items={achievements} />
        </div>
      )}

      {positions.length > 0 && (
        <div>
          <SectionTitle>Positions of Responsibility</SectionTitle>
          {positions.map((pos, idx) => (
            <PORItem key={pos.id} pos={pos} isLast={idx === positions.length - 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClassicTemplate;
