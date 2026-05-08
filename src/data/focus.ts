export interface FocusItem {
  label: string;
  status: "Learning" | "Practicing" | "Building";
}

export const currentFocusAreas = [
  "Data Structures & Algorithms",
  "Competitive Programming",
  "Full Stack Development",
  "Modern Web Development",
];

export const currentlyLearning: FocusItem[] = [
  { label: "Trees", status: "Learning" },
  { label: "Graphs", status: "Learning" },
  { label: "Dynamic Programming", status: "Practicing" },
  { label: "React", status: "Building" },
  { label: "Node.js", status: "Learning" },
  { label: "Express.js", status: "Learning" },
];
