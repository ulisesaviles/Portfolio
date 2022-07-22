// Project card component to display
import ProjectCard from "./projectCard";

// Get all projects
import { allProjects } from "../config/projects";

// Styles
import styles from "../styles/components/ProjectCard.module.css";

// Types
import { Project, ProjectSize } from "../types/projects";

// Helpers
import { getProjectsBySize } from "../config/helpers";

// React component
const ProjectCardsContainer = ({ size }: { size?: ProjectSize }) => {
  // Define projects to return
  let projects: Project[] = [];
  if (!size) projects = allProjects;
  else projects = getProjectsBySize(size);

  // JSX
  return (
    <div className={styles.projectsCardsContainer}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
export default ProjectCardsContainer;
