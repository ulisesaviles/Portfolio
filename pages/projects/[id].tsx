// NextJS imports
import Head from "next/head";

// Types
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";

// Styles
import styles from "../../styles/pages/Project.module.css";

// Components
import Layout from "../../components/layout";

// Helpers
import {
  getProjectsIds,
  getProjectWithId,
  getTechnologies,
  sleep,
} from "../../config/helpers";
import Image from "next/image";
import Button from "../../components/button";
import { useState } from "react";

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
  // Data
  const devProcessOptions: {
    id: "technologies" | "timeLine" | "team" | "deployment";
    name: string;
  }[] = [
    { id: "technologies", name: "Tools used" },
    { id: "timeLine", name: "Timeline" },
    { id: "team", name: "Team behind the project" },
    { id: "deployment", name: "Deployment" },
  ];

  // Constants
  const pageTitle = `Ulises Aviles | ${project.title}`;
  const [selectedDevProcess, setSelectedDevProcess] = useState(
    devProcessOptions[0]
  );
  const [devProcessContentIsHidden, setDevProcessContentIsHidden] =
    useState(false);

  // Functions
  const handleSelecHeader = async (headerId: string) => {
    for (let i = 0; i < devProcessOptions.length; i++) {
      const option = devProcessOptions[i];
      if (option.id === headerId) {
        setDevProcessContentIsHidden(true);
        await sleep(200);
        setSelectedDevProcess(option);
        setDevProcessContentIsHidden(false);
        return;
      }
    }
  };

  // JSX
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
          {/* Cover */}
          <section className={styles.coverContainer}>
            <div className={styles.coverImgContainer}>
              <Image className={styles.coverImg} src={project.cover} alt="" />
            </div>
            <div className={styles.coverTextContainer}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.category}>{project.category}</p>
              <p className={styles.shortDescription}>
                {project.description.short}
              </p>
              <p className={styles.similar}>Want to build something similar?</p>
              <Button fontSize={15} href="/contact" txt="Let's get to it!" />
            </div>
          </section>

          <div style={{ height: 50 }} />

          {/* What this project is about */}
          <section className={styles.whatThisProjectIsContainer}>
            <h2 className={styles.sectionTitle}>WHAT THIS PROJECT IS ABOUT</h2>
            <p className={styles.whatThisProjectIs}>
              {project.description.large}
            </p>
          </section>

          <div style={{ height: 30 }} />

          {/* Dev process */}
          <section className={styles.devProcessContainer}>
            <h2 className={styles.sectionTitle}>Development process</h2>
            <div className={styles.devProcessHeadersContainer}>
              {devProcessOptions.map((header) => (
                <div
                  className={styles.devProcessHeaderContainer}
                  key={header.id}
                  onClick={() => handleSelecHeader(header.id)}
                >
                  <h3
                    className={`${styles.devProcessHeader} ${
                      styles[
                        header.id === selectedDevProcess.id
                          ? "selectedHeader"
                          : null
                      ]
                    }`}
                  >
                    {header.name}
                  </h3>
                  <div
                    className={`${styles.devProcessHeaderUnderline} ${
                      styles[
                        header.id !== selectedDevProcess.id ? "hidden" : null
                      ]
                    }`}
                  />
                </div>
              ))}
            </div>
            <div
              className={`${styles.devProcessContentContainer} ${
                styles[devProcessContentIsHidden ? "hidden" : null]
              }`}
            >
              <div className={styles.devProcessLeftContainer}>
                {selectedDevProcess.id === "technologies" ? (
                  <div className={styles.toolsUsedContainer}>
                    {getTechnologies(
                      project.developmentProcess.technologies.technologies
                    ).map((tech) => (
                      <div key={tech.name} className={styles.techContainer}>
                        <h1 className={styles.techLogo}>{tech.logo({})}</h1>
                        <p className={styles.techName}>{tech.name}</p>
                      </div>
                    ))}
                  </div>
                ) : selectedDevProcess.id === "timeLine" ? (
                  <div className={styles.timelineContainer}>
                    <h1 className={styles.numberOfWeeks}>
                      {project.developmentProcess.timeLine.weeks}
                    </h1>
                    <h3 className={styles.weeks}>Weeks</h3>
                  </div>
                ) : selectedDevProcess.id === "team" ? (
                  <div className={styles.teamContainer}>
                    {project.developmentProcess.team.members.map((member) => (
                      <div className={styles.memberContainer} key={member.name}>
                        <div
                          className={styles.memberImgContainer}
                          key={member.name}
                        >
                          <Image
                            src={member.img}
                            alt=""
                            className={styles.memberImg}
                          />
                        </div>
                        <h3 className={styles.memberName}>{member.name}</h3>
                      </div>
                    ))}
                  </div>
                ) : selectedDevProcess.id === "deployment" ? (
                  <div className={styles.deploymentContainer}>
                    {project.developmentProcess.deployment.qr ? (
                      <div className={styles.viewProjectContainer}>
                        <div className={styles.qrContainer}>
                          <Image
                            src={project.developmentProcess.deployment.qr}
                            alt=""
                            className={styles.qr}
                          />
                        </div>
                        <a
                          className={styles.viewProject}
                          href={project.developmentProcess.deployment.link}
                        >
                          View project
                        </a>
                      </div>
                    ) : (
                      <p>This project is not publically available</p>
                    )}
                  </div>
                ) : null}
              </div>
              <div className={styles.devProcessRightContainer}>
                <p className={styles.devProcessDescription}>
                  {
                    project.developmentProcess[selectedDevProcess.id]
                      .description
                  }
                </p>
                <p className={styles.suggestion}>
                  Do you have a suggestion to improve this project?
                </p>
                <Button href="/contact" fontSize={15} txt="Let me know it!" />
              </div>
            </div>
          </section>

          <div style={{ height: 50 }} />

          {/* Features */}
          <section className={styles.featuresSectionContainer}>
            <h2 className={styles.sectionTitle}>Principal features</h2>
            <div className={styles.featuresContainer}>
              {project.features.map((feature) => {
                const index = project.features.indexOf(feature);
                return (
                  <div
                    key={index}
                    className={`${styles.featureContainer} ${
                      styles[index % 2 === 0 ? "featureLeft" : "featureRight"]
                    }`}
                  >
                    <div
                      className={`${styles.featureImgContainer} ${
                        styles[index % 2 === 0 ? "imgLeft" : "imgRight"]
                      }`}
                    >
                      <Image
                        src={feature.img}
                        alt=""
                        className={styles.featureImg}
                      />
                    </div>
                    <div className={styles.featureTxtContainer}>
                      <h3 className={styles.featureName}>{feature.title}</h3>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <div style={{ height: 50 }} />

          {/* Call to action */}
          <section className={styles.whatThisProjectIsContainer}>
            <h2 className={styles.sectionTitle}>
              WOULD YOU LIKE TO BUILD SOMETHING SIMILAR?
            </h2>
            <p className={styles.whatThisProjectIs}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              faucibus libero aliquam commodo suscipit. Sed elementum, ipsum sed
              ultricies suscipit, augue lorem interdum est, at auctor odio nibh
              ut massa.
            </p>
            <Button fontSize={18} href="/contact" txt="Let's do it!" />
          </section>

          <div style={{ height: 50 }} />
        </main>
      </Layout>
    </div>
  );
};

export default Project;
