export interface Project {
  title: string;
  type: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github?: string;
  live?: string;
  isOngoing?: boolean;
}

export const projects: Project[] = [
  {
    title: "DevNavigator",
    type: "Student Learning / Developer Tool",
    description:
      "A guided learning and project navigation platform built to help students discover structured resources, follow learning paths, and move from concepts to project building.",
    techStack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    highlights: [
      "Student-focused learning flow",
      "Resource navigation",
      "Clean UI",
      "Responsive design",
      "Team-based development",
    ],
  },
  {
    title: "Stock Trading Dashboard",
    type: "Web Application",
    description:
      "A responsive stock trading dashboard with authentication, dashboard UI, portfolio views, stock cards, and trading-related interface components.",
    techStack: ["React", "Tailwind CSS", "Supabase", "JavaScript"],
    highlights: [
      "Responsive design",
      "Animations",
      "Reusable components",
      "UI optimization",
      "Overall user experience improvement",
    ],
  },
  {
    title: "Real-Time Weapon Detection System",
    type: "Hackathon / Computer Vision Project",
    description:
      "A real-time surveillance safety system designed to detect weapons from CCTV or smart camera feeds and send rapid alerts to security teams.",
    techStack: ["YOLOv8", "OpenCV", "Python", "Flask", "Twilio"],
    highlights: [
      "Hackathon project",
      "Real-world safety use case",
      "Computer vision approach",
      "Alert system concept",
      "Technical presentation experience",
    ],
  },
  {
    title: "Uber Fare Prediction",
    type: "Machine Learning Project",
    description:
      "A machine learning project using Python data tools and Scikit-learn to work with Uber fare data and compare different model approaches.",
    techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    highlights: [
      "Data analysis",
      "Model comparison",
      "Python tooling",
      "Visualization",
    ],
  },
];
