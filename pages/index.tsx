// NextJS imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import Layout from "../components/layout";
import ProjectCardsContainer from "../components/projectCardsContainer";
import Button from "../components/button";

// Assets
import me from "../public/assets/people/me.jpeg";

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
          {/* Cover */}
          <section className={styles.coverContainer}>
            <div className={styles.coverUpperSectionContainer}>
              <div className={styles.coverTextContainer}>
                <h1 className={styles.title}>
                  I&apos;m Ulises Aviles,
                  <br />
                  full-stack developer.
                </h1>
                <p className={styles.description}>
                  I&apos;m a 21 year old full-stack developer with bast
                  experience building solutions that go from static site
                  development to entire ecosystems of mobile and web apps.
                  I&apos;m currently in senior year of computer science.
                </p>
              </div>
              <div className={styles.meImageContainer}>
                <Image src={me} alt="" className={styles.meImage} />
              </div>
            </div>
            <Button href="/contact" txt="Contact me!" fontSize={20} />
          </section>

          <div style={{ height: 50 }} />

          {/* Projects */}
          <section className={styles.projectsContainer}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <ProjectCardsContainer />
          </section>

          <div style={{ height: 50 }} />

          {/* What I do */}

          {/* Tech */}

          {/* Call to action */}
        </main>
      </Layout>
    </div>
  );
}
