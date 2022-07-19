// NextJS imports
import Head from "next/head";
import Image from "next/image";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import Layout from "../components/layout";

// Main react component
export default function Contact() {
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>Ulises Aviles | Contact</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="CONTACT">
        <main className={styles.main}>
          <h1 className={styles.title}>Contact</h1>
        </main>
      </Layout>
    </div>
  );
}
