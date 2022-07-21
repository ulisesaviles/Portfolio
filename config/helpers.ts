import { Project } from "../types/projects";
import { Technology, TechnologyName } from "../types/technologies";
import { allProjects } from "./projects";
import { allTechnologies } from "./technologies";

export const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

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

export const getTechnologies = (names: TechnologyName[]) => {
  let arr: Technology[] = [];
  for (let i = 0; i < allTechnologies.length; i++) {
    const technology = allTechnologies[i];
    if (names.includes(technology.name)) arr.push(technology);
  }
  return arr;
};
