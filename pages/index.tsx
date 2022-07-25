// React imports
import { useState } from "react";

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

// Helper functions
import { sleep } from "../config/helpers";

// Data
import { favTechnologies } from "../config/technologies";

// Main react component
export default function Home() {
  // State handlers
  const [whatIDoSelectedIndex, setWhatIDoSelectedIndex] = useState(0);

  // Data
  const whatIDoData = [
    {
      title: "Discovery & Product Design",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
    {
      title: "Web Development",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
    {
      title: "Mobile apps",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
    {
      title: "Ecommerce",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
    {
      title: "Enterprise Solutions",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
    {
      title: "Support & Maintenance",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed ultricies suscipit, augue lorem interdum est, at auctor odio nibh ut massa. Sed lobortis blandit vehicula. Etiam ex eros, dignissim ut nulla vitae, sagittis faucibus augue. Morbi nec metus sem. Duis ut nisl vel elit tempor cursus vitae eu mi. Pellentesque purus diam, accumsan non mattis in, blandit sit amet nisl.",
    },
  ];
  const [whatIDo, setWhatIDo] = useState(whatIDoData[whatIDoSelectedIndex]);
  const [whatIDoRightClass, setWhatIDoRightClass] = useState("displayed");

  // Handlers
  const hanldeWhatIDo = async (index: number) => {
    setWhatIDoSelectedIndex(index);
    setWhatIDoRightClass("hidden");
    await sleep(200);
    setWhatIDo(whatIDoData[index]);
    setWhatIDoRightClass("displayed");
  };

  // JSX
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
            <Link href="/projects">
              <a className={styles.viewAll}>View all</a>
            </Link>
            <ProjectCardsContainer />
          </section>

          <div style={{ height: 30 }} />

          {/* What I do */}
          <section className={styles.whatIDoContainer}>
            <h2 className={styles.sectionTitle}>What I do</h2>
            <div className={styles.whatIDoContentContainer}>
              <div className={styles.whatIDoLeftContainer}>
                {whatIDoData.map((item) => {
                  const index = whatIDoData.indexOf(item);
                  return (
                    <div
                      key={item.title}
                      className={styles.whatIDoItemContainer}
                      onClick={() => hanldeWhatIDo(index)}
                    >
                      <p
                        className={`${styles.whatIDoItem} ${
                          styles[
                            whatIDoSelectedIndex === index
                              ? "whatIDoItemSelected"
                              : "whatIDoItemUnselected"
                          ]
                        }`}
                      >
                        {item.title}
                      </p>
                      <div
                        className={`${styles.whatIdOUnderline} ${
                          styles[
                            whatIDoSelectedIndex !== index
                              ? "hidden"
                              : "displayed"
                          ]
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className={`${styles.whatIDoRightContainer} ${styles[whatIDoRightClass]}`}
              >
                <h3 className={styles.whatIDoTitle}>{whatIDo.title}</h3>
                <p className={styles.whatIDoDescription}>
                  {whatIDo.decription}
                </p>
                <Button href="/contact" fontSize={15} txt="Got an idea?" />
              </div>
            </div>
          </section>

          <div style={{ height: 50 }} />

          {/* Tech */}
          <section className={styles.techContainer}>
            <h2 className={styles.sectionTitle}>My favorite technologies</h2>
            <div className={styles.techsContainer}>
              {favTechnologies.map((tech) => (
                <div key={tech.name} className={styles.tech}>
                  <h1 className={styles.techLogo}>{tech.logo({})}</h1>
                  <p className={styles.techName}>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: 30 }} />

          {/* Call to action */}
          <section className={styles.callContainer}>
            <h2 className={styles.sectionTitle}>
              Let&apos;s build something great!
            </h2>
            <p className={styles.callDescription}>
              I&apos;m passionate about helping people achieve better results.
              I&apos;ll put all my effort into it with you.
              <br />
              I&apos;d love to hear your idea and turn it into an app or
              website!
            </p>
            <Button txt="get in touch!" fontSize={16} href="/contact" />
          </section>

          <div style={{ height: 50 }} />
        </main>
      </Layout>
    </div>
  );
}
