export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
  };
  experience: {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    id: string;
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
  }[];
  skills: string[];
}

export const defaultResumeData: ResumeData = {
  personal: {
    name: "John Doe",
    title: "Senior Software Engineer",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary:
      "Experienced software engineer with 8+ years building scalable web applications. Passionate about clean code and great user experiences.",
  },
  experience: [
    {
      id: "1",
      company: "Tech Corp",
      role: "Senior Software Engineer",
      startDate: "2021-01",
      endDate: "Present",
      description:
        "Led a team of 5 engineers building microservices architecture. Improved system performance by 40%.",
    },
    {
      id: "2",
      company: "StartupXYZ",
      role: "Full Stack Developer",
      startDate: "2018-06",
      endDate: "2020-12",
      description:
        "Built and maintained core product features using React and Node.js. Grew user base from 1K to 50K.",
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of Technology",
      degree: "B.S. Computer Science",
      startDate: "2014-09",
      endDate: "2018-05",
    },
  ],
  skills: ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL", "GraphQL"],
};
