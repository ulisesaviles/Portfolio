// Project card component to display
import ProjectCard from "./projectCard";

// Get all projects
import { allProjects } from "../config/projects";

// Styles
import styles from "../styles/components/ProjectCard.module.css";

// React component
const ProjectCardsContainer = () => {
  return (
    <div className={styles.projectsCardsContainer}>
      {allProjects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};
export default ProjectCardsContainer;
