// NextJS imports
import Head from "next/head";

// Types
import { Project as ProjectType } from "../../types/projects";
import { GetStaticPropsContext } from "next";

// Styles
import styles from "../../styles/pages/Home.module.css";

// Components
import Layout from "../../components/layout";

// Helpers
import { getProjectsIds, getProjectWithId } from "../../config/helpers";

// SEO related
export async function getStaticPaths() {
  const paths = getProjectsIds().map((id) => ({ params: { id } }));
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const projectId = context.params.id as string;
  const project = getProjectWithId(projectId);
  return { props: { project } };
};

// Main react component
export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>Ulises Aviles | {project.title}</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="PROJECT">
        <main className={styles.main}>
          <h1 className={styles.title}>Project: {project.title}</h1>
        </main>
      </Layout>
    </div>
  );
}
