// Import types
import { Project, ProjectSize } from "../types/projects";
import { Technology, TechnologyName } from "../types/technologies";

// HTTP
import axios from "axios";

// Import data
import { allProjects } from "./projects";
import { allTechnologies } from "./technologies";

// General
export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Projects
export const getProjectsIds = () => {
  return allProjects.map((project) => project.id);
};

export const getProjectWithId = (id: string): Project | null => {
  for (let i = 0; i < allProjects.length; i++) {
    const project = allProjects[i];
    if (id === project.id) return project;
  }
  return null;
};

export const getProjectsBySize = (size: ProjectSize): Project[] => {
  let projects: Project[] = [];
  for (let i = 0; i < allProjects.length; i++) {
    const project = allProjects[i];
    if (project.size === size) projects.push(project);
  }
  return projects;
};

// Technologies
export const getTechnologies = (names: TechnologyName[]) => {
  let arr: Technology[] = [];
  for (let i = 0; i < allTechnologies.length; i++) {
    const technology = allTechnologies[i];
    if (names.includes(technology.name)) arr.push(technology);
  }
  return arr;
};

// Queries
export const query = async (method: string, data?: Object) => {
  return await axios.post(`https://www.ulisesaviles.dev/api/${method}`, data);
};
