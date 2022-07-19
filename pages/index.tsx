// NextJS imports
import Head from "next/head";
import Image from "next/image";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import Layout from "../components/layout";

// Main react component
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>Ulises Aviles | Home</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="HOME">
        <main className={styles.main}>
          <h1 className={styles.title}>Home</h1>
        </main>
      </Layout>
    </div>
  );
}
