// Infered types
import { StaticImageData } from "next/image";
import { TechnologyName } from "./technologies";

// Local types
type ProjectCategory =
  | "Large free-lance project"
  | "Large school project"
  | "Medium-size free-lance project"
  | "Medium-size school project"
  | "Small school project"
  | "Small project";

export type ProjectSize = "large" | "medium" | "small";

// Actual project type
export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  cover: StaticImageData;
  size: ProjectSize;
  type: "mobile-app" | "web-app" | "static web site";
  description: {
    short: string;
    large: string;
  };
  developmentProcess: {
    technologies: {
      description: string;
      technologies: TechnologyName[];
    };
    timeLine: {
      weeks: number;
      description: string;
    };
    team: {
      members: { name: string; img: StaticImageData }[];
      description: string;
    };
    deployment: {
      qr?: StaticImageData;
      link?: string;
      description: string;
    };
  };
  features: {
    title: string;
    description: string;
    img: StaticImageData;
  }[];
};
