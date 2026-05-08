export interface Skill {
  name: string;
  icon?: string; // react-icons/si key, e.g. "SiReact"
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide-react icon name
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "C++", icon: "SiCplusplus" },
      { name: "C", icon: "SiC" },
      { name: "JavaScript", icon: "SiJavascript" },
      { name: "Python", icon: "SiPython" },
      { name: "SQL", icon: "SiMysql" },
      { name: "HTML", icon: "SiHtml5" },
      { name: "CSS", icon: "SiCss3" },
    ],
  },
  {
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", icon: "SiReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Responsive Design", icon: "SiCss3" },
    ],
  },
  {
    title: "Backend / Database",
    icon: "Server",
    skills: [
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "REST APIs", icon: "SiPostman" },
    ],
  },
  {
    title: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "VS Code", icon: "SiVisualstudiocode" },
      { name: "n8n", icon: "SiN8N" },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: "BookOpen",
    skills: [
      { name: "Data Structures" },
      { name: "Algorithms" },
      { name: "OOP" },
      { name: "DBMS" },
      { name: "Problem Solving" },
    ],
  },
  {
    title: "ML / Data Tools",
    icon: "BarChart3",
    skills: [
      { name: "NumPy", icon: "SiNumpy" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "Matplotlib", icon: "SiPlotly" },
      { name: "Scikit-learn", icon: "SiScikitlearn" },
      { name: "Machine Learning" },
    ],
  },
];
