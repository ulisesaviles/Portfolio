// Styles
import Image from "next/image";
import styles from "../styles/components/ProjectCard.module.css";

// Types
import { Project } from "../types/projects";
import Button from "./button";

// Actual component
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.imageSuperContainer}
        style={{ borderRadius: 12, overflow: "hidden" }}
      >
        <div className={styles.imageContainer}>
          <Image
            src={project.cover}
            alt=""
            layout="fixed"
            height={200}
            style={{ borderRadius: 12, overflow: "hidden" }}
          />
        </div>
      </div>
      <div className={styles.txtContainer}>
        <h3 className={styles.title}>{project.title}</h3>
        <h4 className={styles.category}>{project.category}</h4>
        <h4 className={styles.type}>{project.type}</h4>
        <p className={styles.description}>{project.description.short}</p>
      </div>
      <div style={{ height: 10 }} />
      <Button fontSize={15} href={`projects/${project.id}`} txt="Details" />
      <div style={{ height: 10 }} />
    </div>
  );
};

// Export
export default ProjectCard;
