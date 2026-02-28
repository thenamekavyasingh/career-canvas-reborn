import { useResume } from "@/context/ResumeContext";
import { Mail, Phone, MapPin } from "lucide-react";

const ResumePreview = () => {
  const { data } = useResume();
  const { personal, experience, education, skills } = data;

  return (
    <div className="bg-card rounded-2xl card-shadow overflow-hidden border border-border/50">
      {/* Header */}
      <div className="hero-bg px-8 py-8">
        <h1 className="font-display text-2xl font-bold text-primary-foreground">
          {personal.name || "Your Name"}
        </h1>
        <p className="text-accent font-medium mt-1">{personal.title || "Job Title"}</p>
        <div className="flex flex-wrap gap-4 mt-4 text-primary-foreground/70 text-sm">
          {personal.email && (
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> {personal.email}
            </span>
          )}
          {personal.phone && (
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" /> {personal.phone}
            </span>
          )}
          {personal.location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> {personal.location}
            </span>
          )}
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Summary */}
        {personal.summary && (
          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent mb-2">
              Summary
            </h2>
            <p className="text-foreground/80 text-sm leading-relaxed">{personal.summary}</p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground text-sm">{exp.role || "Role"}</h3>
                  <p className="text-muted-foreground text-xs">
                    {exp.company || "Company"} · {exp.startDate} — {exp.endDate}
                  </p>
                  {exp.description && (
                    <p className="text-foreground/70 text-sm mt-1 leading-relaxed">{exp.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-4 border-l-2 border-border">
                  <h3 className="font-semibold text-foreground text-sm">{edu.degree || "Degree"}</h3>
                  <p className="text-muted-foreground text-xs">
                    {edu.institution || "Institution"} · {edu.startDate} — {edu.endDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div>
            <h2 className="font-display text-xs font-semibold uppercase tracking-widest text-accent mb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
