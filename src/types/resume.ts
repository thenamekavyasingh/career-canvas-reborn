export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    linkedin: string;
    github: string;
    leetcode: string;
  };
  education: {
    id: string;
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    grade: string;
  }[];
  projects: {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    sourceLink: string;
    liveLink: string;
    bullets: string[];
    techStack: string;
  }[];
  skills: {
    id: string;
    category: string;
    items: string;
  }[];
  achievements: string[];
  positions: {
    id: string;
    title: string;
    organization: string;
    date: string;
  }[];
}

export const defaultResumeData: ResumeData = {
  personal: {
    name: "Kavya Singh",
    title: "B.Tech",
    email: "kavyaasingh04@gmail.com",
    phone: "+91 7632852004",
    location: "",
    summary: "",
    linkedin: "LinkedIn",
    github: "Github",
    leetcode: "LeetCode",
  },
  education: [
    {
      id: "1",
      institution: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science & Engineering",
      startDate: "2022",
      endDate: "2026",
      grade: "8.07/10 CGPA",
    },
    {
      id: "2",
      institution: "G V Vidayan",
      degree: "Senior Secondary Education · Class 12th · CBSE",
      startDate: "2019",
      endDate: "2021",
      grade: "91%",
    },
    {
      id: "3",
      institution: "G V Vidayan",
      degree: "Secondary Education · Class 10th · CBSE",
      startDate: "2018",
      endDate: "2019",
      grade: "96.6%",
    },
  ],
  projects: [
    {
      id: "1",
      title: "Full Stack Notes Website",
      subtitle: "",
      date: "",
      sourceLink: "Source Code",
      liveLink: "Live",
      bullets: [
        "Designed and developed a full-stack web application for creating, storing, and managing notes with user authentication capabilities.",
        "Developed the frontend using React.js, leveraging Tailwind CSS for a responsive and modern UI/UX.",
        "Implemented JWT (JSON Web Token) authentication to ensure secure user login and data protection.",
        "Implemented MongoDB database to store user notes efficiently.",
      ],
      techStack: "HTML, CSS, JavaScript, React JS, JSON Web Token, MongoDB, Express.",
    },
    {
      id: "2",
      title: "Sorting Algorithm Visualizer",
      subtitle: "",
      date: "",
      sourceLink: "Source Code",
      liveLink: "",
      bullets: [
        "Developed an interactive web application that visually demonstrates the working of five sorting algorithms.",
        "Implemented dynamic input controls, allowing users to modify array size and sorting speed in real-time.",
        "Designed a responsive UI using HTML, CSS, and JavaScript, ensuring compatibility across devices.",
        "Optimized animations to improve user engagement and ensure smooth performance.",
      ],
      techStack: "HTML, CSS, JavaScript, React.js",
    },
  ],
  skills: [
    { id: "1", category: "Languages", items: "C++, C, JavaScript" },
    { id: "2", category: "Backend", items: "Node.js, Express.js" },
    { id: "3", category: "Frontend", items: "React, TailwindCSS, HTML, CSS, Bootstrap" },
    { id: "4", category: "Databases", items: "SQL, MongoDB" },
    { id: "5", category: "Developer Tools", items: "VS Code, GitHub" },
    { id: "6", category: "Areas of Interest", items: "Algorithms and Data Structures, Full Stack Web Development, Competitive Programming" },
  ],
  achievements: [
    "Microsoft SDE intern interview finalist",
    "Solved 300+ problems on Leetcode with a contest rating of 1506 with constant participation.",
    "Flipkart runway certificate of participation.",
  ],
  positions: [
    {
      id: "1",
      title: "Technical team member",
      organization: "Science and Environmental Club (NIT Patna)",
      date: "2023-present",
    },
    {
      id: "2",
      title: "Content team member",
      organization: "Science and Environmental Club (NIT Patna)",
      date: "2023-present",
    },
  ],
};
