import { IconType } from "react-icons";

export type TechnologyName =
  | "Github"
  | "Cloud functions"
  | "Firestore"
  | "ReactJS"
  | "React native"
  | "Next.js"
  | "Redux"
  | "Adobe Xd"
  | "Photoshop"
  | "TypeScript"
  | "JavaScript"
  | "Python"
  | "HTML 5"
  | "CSS 3"
  | "NodeJS"
  | "npm"
  | "yarn"
  | "Expo"
  | "EAS"
  | "Stripe"
  | "Jira"
  | "ClickUp";

export type Technology = {
  logo: IconType;
  name: TechnologyName;
};
