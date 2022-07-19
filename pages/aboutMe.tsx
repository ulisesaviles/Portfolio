// NextJS imports
import Head from "next/head";
import Image from "next/image";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import Layout from "../components/layout";

// Main react component
export default function AboutMe() {
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>Ulises Aviles | About me</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="ABOUT ME">
        <main className={styles.main}>
          <h1 className={styles.title}>About me</h1>
        </main>
      </Layout>
    </div>
  );
}
