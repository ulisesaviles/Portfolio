// React imports
import { useState } from "react";

// NextJS imports
import Head from "next/head";
import Image from "next/image";

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
                      onClick={() => setWhatIDoSelectedIndex(index)}
                    >
                      <h4 className={styles.whatIDoItem}>{item.title}</h4>
                      {whatIDoSelectedIndex === index ? (
                        <div className={styles.whatIdOUnderline} />
                      ) : null}
                    </div>
                  );
                })}
              </div>
              <div className={styles.whatIDoRightContainer}>
                <h3 className={styles.whatIDoTitle}>
                  {whatIDoData[whatIDoSelectedIndex].title}
                </h3>
                <p className={styles.whatIDoDescription}>
                  {whatIDoData[whatIDoSelectedIndex].decription}
                </p>
                <Button href="/contact" fontSize={15} txt="Got an idea?" />
              </div>
            </div>
          </section>

          <div style={{ height: 50 }} />

          {/* Tech */}

          {/* Call to action */}
        </main>
      </Layout>
    </div>
  );
}
