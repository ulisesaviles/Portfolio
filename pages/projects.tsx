// NextJS imports
import Head from "next/head";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Projects.module.css";

// Components
import Layout from "../components/layout";
import Button from "../components/button";
import ProjectCardsContainer from "../components/projectCardsContainer";

// Data
import { favTechnologies } from "../config/technologies";

// Main react component
export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Headers */}
      <Head>
        <title>Ulises Aviles | Projects</title>
        <meta name="description" content="Description" />
      </Head>

      {/* Content */}
      <Layout selectedTabName="PROJECTS">
        <main className={styles.main}>
          <section className={styles.coverSection}>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.description}>
              Every project I develop has the purpouse of helping people achieve
              better results. If you are looking for someone to develop the
              tipping point of your company, oh boy I&apos;m the one you are
              looking for. Check out some of my projects and
              <Link href="/contact">
                <a className={styles.aInTxt}> contact me after that! </a>
              </Link>
            </p>
          </section>

          <div style={{ height: 30 }} />

          {/* Large */}
          <section className={styles.projectsContainer}>
            <h2 className={styles.sectionTitle}>Large projects</h2>
            <ProjectCardsContainer size="large" />
          </section>

          {/* How can we work together */}
          <section className={styles.textSectionContainer}>
            <h2 className={styles.sectionTitle}>How can we work together?</h2>
            <p className={styles.txt}>
              It doesn&apos;t matter if you have a whole structure or just a
              blurry idea of the project you want to develop,
              <Link href="/contact">
                <a className={styles.aInTxt}> get in touch with me </a>
              </Link>
              and let&apos;s have a chat about it. I would love to work with you
              and your team!
            </p>
          </section>

          <div style={{ height: 40 }} />

          {/* Medium */}
          <section className={styles.projectsContainer}>
            <h2 className={styles.sectionTitle}>Medium-size projects</h2>
            <ProjectCardsContainer size="medium" />
          </section>

          {/* How can we work together */}
          <section className={styles.textSectionContainer}>
            <h2 className={styles.sectionTitle}>
              DO YOU WANT ME TO JOIN YOUR TEAM?
            </h2>
            <p className={styles.txt}>
              I currently work as a freelancer for multiple clients. I enjoy the
              flexibility that comes with it. However,
              <Link href="/contact">
                <a className={styles.aInTxt}>
                  {" "}
                  I&apos;m always open to hear a good offer! Contact me
                </a>
              </Link>
              , I would love to be part of a great team.
            </p>
          </section>

          <div style={{ height: 40 }} />

          {/* Small */}
          <section className={styles.projectsContainer}>
            <h2 className={styles.sectionTitle}>Small projects</h2>
            <ProjectCardsContainer size="small" />
          </section>

          {/* Tech */}
          <section className={styles.techContainer}>
            <h2 className={styles.sectionTitle}>My favorite technologies</h2>
            <p className={styles.techTxt}>
              I&apos;m always making research about new tools that will help me
              develop great projects for my clients. However, when it is
              possible, I like to stick with the technologies that I know the
              best to ensure that I deliver the best quality projects that can
              scale easy, can be developed fast and are not expensive to
              maintain. Some of them are to following:
            </p>
            <div className={styles.techsContainer}>
              {favTechnologies.map((tech) => (
                <div key={tech.name} className={styles.tech}>
                  <h1 className={styles.techLogo}>{tech.logo({})}</h1>
                  <p className={styles.techName}>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: 10 }} />

          {/* Call to action */}
          <section className={styles.callContainer}>
            <h2 className={styles.sectionTitle}>DID YOU GET INSPIRED?</h2>
            <p className={styles.callDescription}>
              I hope you liked what I do. Being a developer is my passion and my
              projects are one of the things that I&apos;m most proud of.
              <br />
              I&apos;d love feature your project in this page in the future, so
              let&apos;s get to it!
            </p>
            <Button
              txt="LET'S BUILD YOUR PROJECT!"
              fontSize={16}
              href="/contact"
            />
          </section>

          <div style={{ height: 50 }} />
        </main>
      </Layout>
    </div>
  );
}
