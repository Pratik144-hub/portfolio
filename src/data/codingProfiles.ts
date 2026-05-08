export interface CodingProfile {
  platform: string;
  icon: string;
  url: string;
  username: string;
  description: string;
  /** Future: add stats fields here */
  stats?: {
    label: string;
    value: string;
  }[];
}

export const codingProfiles: CodingProfile[] = [
  {
    platform: "GitHub",
    icon: "Github",
    url: "https://github.com/Pratik144-hub",
    username: "Pratik144-hub",
    description:
      "Source code, repositories, and project contributions. Open source activity and collaboration.",
  },
  {
    platform: "LeetCode",
    icon: "Code",
    url: "https://leetcode.com/u/TheCodeStriker/",
    username: "TheCodeStriker",
    description:
      "Data Structures & Algorithms practice. Problem solving, contests, and coding streak tracking.",
  },
  {
    platform: "Codeforces",
    icon: "Trophy",
    url: "https://codeforces.com/profile/bargalpratik2005",
    username: "bargalpratik2005",
    description:
      "Competitive programming contests, ratings, and algorithmic problem solving submissions.",
  },
];
