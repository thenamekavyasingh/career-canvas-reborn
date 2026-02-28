import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ResumeData, defaultResumeData } from "@/types/resume";

interface ResumeContextType {
  data: ResumeData;
  updatePersonal: (field: keyof ResumeData["personal"], value: string) => void;
  addExperience: () => void;
  updateExperience: (id: string, field: string, value: string) => void;
  removeExperience: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, field: string, value: string) => void;
  removeEducation: (id: string) => void;
  updateSkills: (skills: string[]) => void;
}

const ResumeContext = createContext<ResumeContextType | null>(null);

export const useResume = () => {
  const ctx = useContext(ResumeContext);
  if (!ctx) throw new Error("useResume must be used within ResumeProvider");
  return ctx;
};

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem("resume-data");
    return saved ? JSON.parse(saved) : defaultResumeData;
  });

  useEffect(() => {
    localStorage.setItem("resume-data", JSON.stringify(data));
  }, [data]);

  const updatePersonal = (field: keyof ResumeData["personal"], value: string) => {
    setData((prev) => ({ ...prev, personal: { ...prev.personal, [field]: value } }));
  };

  const addExperience = () => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { id: Date.now().toString(), company: "", role: "", startDate: "", endDate: "", description: "" },
      ],
    }));
  };

  const updateExperience = (id: string, field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  };

  const removeExperience = (id: string) => {
    setData((prev) => ({ ...prev, experience: prev.experience.filter((e) => e.id !== id) }));
  };

  const addEducation = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { id: Date.now().toString(), institution: "", degree: "", startDate: "", endDate: "" },
      ],
    }));
  };

  const updateEducation = (id: string, field: string, value: string) => {
    setData((prev) => ({
      ...prev,
      education: prev.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));
  };

  const removeEducation = (id: string) => {
    setData((prev) => ({ ...prev, education: prev.education.filter((e) => e.id !== id) }));
  };

  const updateSkills = (skills: string[]) => {
    setData((prev) => ({ ...prev, skills }));
  };

  return (
    <ResumeContext.Provider
      value={{
        data,
        updatePersonal,
        addExperience,
        updateExperience,
        removeExperience,
        addEducation,
        updateEducation,
        removeEducation,
        updateSkills,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
