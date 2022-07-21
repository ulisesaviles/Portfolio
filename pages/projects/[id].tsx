// NextJS imports
import Head from "next/head";

// Types
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

// Styles
import styles from "../../styles/pages/Home.module.css";

// Components
import Layout from "../../components/layout";

// Helpers
import { getProjectsIds, getProjectWithId } from "../../config/helpers";

// SEO related
export const getStaticProps = ({ params }: GetStaticPropsContext) => {
  const projectId = params.id as string;
  const project = getProjectWithId(projectId);
  return { props: { project } };
};

export const getStaticPaths = () => {
  const paths = getProjectsIds().map((id) => ({ params: { id } }));
  return {
    paths: paths,
    fallback: false,
  };
};

// Main react component
const Project = ({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const pageTitle = `Ulises Aviles | ${project.title}`;
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="PROJECT">
        <main className={styles.main}>
          <h1 className={styles.title}>Project: {project.title}</h1>
          <p>{project.description.short}</p>
        </main>
      </Layout>
    </div>
  );
};

export default Project;
