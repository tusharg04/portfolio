export interface Education {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  image?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
}

export const personalData = {
  name: "Tushar Garg",
  title: "Software Engineer & CS Student",
  email: "tushar.garg.ug22@nsut.ac.in",
  phone: "+918368239206",
};

export const education: Education[] = [
  {
    degree: "B.TECH. Computer Science (AI Specialization)",
    institution: "NETAJI SUBHAS UNIVERSITY OF TECHNOLOGY",
    year: "2022-2026",
    grade: "7.88 CGPA",
  },
  {
    degree: "CBSE (Class XII)",
    institution: "Hans Raj Model School",
    year: "2022",
    grade: "94%",
  },
  {
    degree: "CBSE (Class X)",
    institution: "Hans Raj Model School",
    year: "2020",
    grade: "95%",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Secure Learn - Video Learning Platform",
    description: "A secure video platform with user-specific watermarking overlaid at random positions to prevent screen recording and redistribution.",
    technologies: ["Node.js", "Express", "MongoDB", "HTML5"],
    image: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Flight Price Predictor",
    description: "Decision Tree-based ML model that predicts and visualizes flight prices over the next 30 days through interactive charts.",
    technologies: ["Python", "Flask", "Machine Learning", "Data Visualization"],
    image: "https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    title: "PostFast",
    description: "Full-stack tool enabling users to send custom API requests and view responses, helping developers evaluate endpoint stability under load.",
    technologies: ["React", "Node.js", "API Testing"],
    demoUrl: "https://postfast.onrender.com",
    image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    title: "Yoga Pose Detection & Correction",
    description: "Real-time yoga posture detection system using computer vision to identify incorrect poses and guide users with corrective feedback.",
    technologies: ["MediaPipe", "Machine Learning", "Computer Vision"],
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    title: "Online Diagram Editor",
    description: "Interactive diagramming tool supporting drag-and-drop shapes, connectors, text editing, and undo/redo functionality for flowcharts and visual diagrams.",
    technologies: ["HTML5 Canvas", "JavaScript"],
    demoUrl: "https://onlinediagrameditor.onrender.com",
    image: "https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: ["C++"],
  },
  {
    category: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express.js", "MongoDB"],
  },
  {
    category: "Data Structures & Algorithms",
    items: ["Problem Solving", "Competitive Programming"],
  },
  {
    category: "Soft Skills",
    items: ["Team Work", "Leadership", "Communication", "Time Management", "Analytical Mindset"],
  },
];

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "JEE MAINS Excellence",
    description: "Achieved a rank of 2622 (99.7 percentile), placing in the top 0.3 percent among 10 lakh candidates",
  },
  {
    id: 2,
    title: "LeetCode Problem Solver",
    description: "Solved more than 450 coding problems on LeetCode",
  },
  {
    id: 3,
    title: "CodeChef Rating",
    description: "3-star coder on CodeChef",
  },
];