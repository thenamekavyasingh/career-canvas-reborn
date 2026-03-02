import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ResumeData, TemplateType, defaultResumeData } from "@/types/resume";

interface ResumeContextType {
  data: ResumeData;
  updatePersonal: (field: keyof ResumeData["personal"], value: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
  addProject: () => void;
  updateProject: (id: string, field: string, value: string) => void;
  updateProjectBullets: (id: string, bullets: string[]) => void;
  removeProject: (id: string) => void;
  addSkill: () => void;
  updateSkill: (id: string, field: string, value: string) => void;
  removeSkill: (id: string) => void;
  updateAchievements: (achievements: string[]) => void;
  addPosition: () => void;
  updatePosition: (id: string, field: string, value: string) => void;
  removePosition: (id: string) => void;
  setTemplate: (template: TemplateType) => void;
  setLogoUrl: (url: string | null) => void;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
};

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem("resume-data-v2");
    if (saved) {
      const parsed = JSON.parse(saved);
      return { ...defaultResumeData, ...parsed, template: parsed.template || "classic", logoUrl: parsed.logoUrl || null };
    }
    return defaultResumeData;
  });

  useEffect(() => {
    localStorage.setItem("resume-data-v2", JSON.stringify(data));
  }, [data]);

  const updatePersonal = (field: keyof ResumeData["personal"], value: string) =>
    setData((p) => ({ ...p, personal: { ...p.personal, [field]: value } }));

  const addEducation = () =>
    setData((p) => ({
      ...p,
      education: [...p.education, { id: Date.now().toString(), institution: "", degree: "", startDate: "", endDate: "", grade: "" }],
    }));
  const updateEducation = (id: string, field: string, value: string) =>
    setData((p) => ({ ...p, education: p.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)) }));
  const removeEducation = (id: string) =>
    setData((p) => ({ ...p, education: p.education.filter((e) => e.id !== id) }));

  const addProject = () =>
    setData((p) => ({
      ...p,
      projects: [...p.projects, { id: Date.now().toString(), title: "", subtitle: "", date: "", sourceLink: "", liveLink: "", bullets: [""], techStack: "" }],
    }));
  const updateProject = (id: string, field: string, value: string) =>
    setData((p) => ({ ...p, projects: p.projects.map((e) => (e.id === id ? { ...e, [field]: value } : e)) }));
  const updateProjectBullets = (id: string, bullets: string[]) =>
    setData((p) => ({ ...p, projects: p.projects.map((e) => (e.id === id ? { ...e, bullets } : e)) }));
  const removeProject = (id: string) =>
    setData((p) => ({ ...p, projects: p.projects.filter((e) => e.id !== id) }));

  const addSkill = () =>
    setData((p) => ({ ...p, skills: [...p.skills, { id: Date.now().toString(), category: "", items: "" }] }));
  const updateSkill = (id: string, field: string, value: string) =>
    setData((p) => ({ ...p, skills: p.skills.map((e) => (e.id === id ? { ...e, [field]: value } : e)) }));
  const removeSkill = (id: string) =>
    setData((p) => ({ ...p, skills: p.skills.filter((e) => e.id !== id) }));

  const updateAchievements = (achievements: string[]) =>
    setData((p) => ({ ...p, achievements }));

  const addPosition = () =>
    setData((p) => ({
      ...p,
      positions: [...p.positions, { id: Date.now().toString(), title: "", organization: "", date: "" }],
    }));
  const updatePosition = (id: string, field: string, value: string) =>
    setData((p) => ({ ...p, positions: p.positions.map((e) => (e.id === id ? { ...e, [field]: value } : e)) }));
  const removePosition = (id: string) =>
    setData((p) => ({ ...p, positions: p.positions.filter((e) => e.id !== id) }));

  const setTemplate = (template: TemplateType) =>
    setData((p) => ({ ...p, template }));

  const setLogoUrl = (url: string | null) =>
    setData((p) => ({ ...p, logoUrl: url }));

  return (
    <ResumeContext.Provider
      value={{
        data, updatePersonal,
        addEducation, updateEducation, removeEducation,
        addProject, updateProject, updateProjectBullets, removeProject,
        addSkill, updateSkill, removeSkill,
        updateAchievements,
        addPosition, updatePosition, removePosition,
        setTemplate, setLogoUrl,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
