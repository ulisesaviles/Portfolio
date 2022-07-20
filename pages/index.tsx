// NextJS imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import Layout from "../components/layout";

// Assets
import me from "../public/assets/me.jpeg";

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
          <div className={styles.coverContainer}>
            <div className={styles.coverUpperSectionContainer}>
              <div className={styles.coverTextContainer}>
                <h1 className={styles.title}>
                  I&apos;m Ulises Aviles,
                  <br />
                  full-stack developer.
                </h1>
                <p className={styles.description}>
                  I&apos;m 21 year old full-stack developer with bast experience
                  building solutions that go from static site development to
                  entire ecosystems of mobile and web apps. I&apos;m currently
                  in 6th semester of computer science.
                </p>
              </div>
              <div className={styles.meImageContainer}>
                <Image src={me} alt="" className={styles.meImage} />
              </div>
            </div>
            <Link href="/contact">
              <a className={styles.coverCallToAction}>CONTACT ME!</a>
            </Link>
          </div>

          {/* Projects */}

          {/* What I do */}

          {/* Tech */}

          {/* Call to action */}
        </main>
      </Layout>
    </div>
  );
}
