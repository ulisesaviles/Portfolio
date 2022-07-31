// NextJS imports
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/pages/AboutMe.module.css";

// Components
import Layout from "../components/layout";
import Button from "../components/button";

// Assets
import me from "../public/assets/people/me.jpeg";

// Main react component
export default function AboutMe() {
  // JSX
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
          {/* Cover */}
          <section className={styles.coverContainer}>
            <div className={styles.coverUpperSectionContainer}>
              <div className={styles.coverTextContainer}>
                <h1 className={styles.title}>I&apos;m Ulises Aviles.</h1>
                <p className={styles.description}>
                  My name is Ulises Eduardo Aviles Ibarra. I&apos;m a 20 year
                  old Mexican mobile app and web developer that loves to grow
                  and learn (professionally and personally). <br />I have always
                  loved logical problem-solving and business, therefore being a
                  developer feels like heaven to me.
                </p>
              </div>
              <div className={styles.meImageContainer}>
                <Image src={me} alt="" className={styles.meImage} />
              </div>
            </div>
          </section>

          <div style={{ height: 30 }} />

          {/* Why I'm a developer */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
              About Why I&apos;m a developer
            </h2>
            <p className={styles.txt}>
              As stated, I have allways loved to solve problems using logic and
              doing business.
              <br />
              That&apos;s why being a developer was the best career for me,
              since it allowed me to solve problems using logic and do business
              with it. However, the think that I like the most, is that I can
              develop solutions that allow people to achieve better results in
              many areas. That is what keeps me motivated during long coding
              sessions.
            </p>
          </section>

          <div style={{ height: 50 }} />

          {/* My experience as a developer */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>
              ABOUT MY EXPERIENCE AS A DEVELOPER
            </h2>
            <p className={styles.txt}>
              My journey as a developer started right at the start of my second
              year of college, when my object-oriented-programming teacher
              invited me to develop a mobile app with him. The moment I started,
              there was no way back, I enjoyed so much that made the choice to
              focus all my efforts at becoming better at it.
              <br />
              Since the end of that project (it took 4 months), I started my
              freelancer career developing static websites (TurfMasters) and got
              into my first experience as an entrepreneur with my own app
              (Poleo). Since then, I have worked with many great clients for
              both big projects (like the Tendrish app ecosystem) and small ones
              (like STIMB&apos;s website). During this whole process, I
              developed many cool school projects. Some of them are included in
              this portfolio.
            </p>
          </section>

          <div style={{ height: 50 }} />

          {/* About my academic education */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>About my academic education</h2>
            <p className={styles.txt}>
              I started programming in my last year in high school at Colegio
              Ibero Tijuana and I loved it from the beginning, I had always been
              pretty good at all math-related subjects, but programming was a
              practical problem-solving-oriented discipline that allowed me to
              use my attention to detail to develop great solutions. I graduated
              from my high school with the first place in academic performance
              in engineering, and all of my projects were awarded first place in
              the science fair (I was kind of a try hard lol).
              <br />
              Then I started studying computer science at Cetys University and
              I&apos;m loving it. I love the abstract math-related part of the
              major like data structures and discrete math, and of course the
              more practical project-oriented part of it like software
              development. As of the end of 6th semester, I have an average of
              98 out of 100 (my school projects are always outstanding since
              around 90% of my app and web development skills were self taught).
            </p>
          </section>

          <div style={{ height: 50 }} />

          {/* About my personal work */}
          <section className={styles.sectionContainer}>
            <h2 className={styles.sectionTitle}>About my personal growth</h2>
            <p className={styles.txt}>
              I love my work, and apparently all my success until now is due to
              my academic and professional performance, however, I would argue
              that it is equally as important for me to be successful in other
              areas. I love spending time doing thinks like spending time with
              the people I love, reading non-fiction books, meditating and
              exercising. I usually read around 15 books a year.
              <Link href="/contact">
                <a className={styles.aInText}>
                  {" "}
                  Reach me out if you have a great book recommendation!
                </a>
              </Link>
            </p>
          </section>

          <div style={{ height: 50 }} />

          {/* Call to action */}
          <p className={styles.youKnowMe}>
            You know me by now. Let me know you!
          </p>
          <Button fontSize={16} href="/contact" txt="Contact me" />

          <div style={{ height: 50 }} />
        </main>
      </Layout>
    </div>
  );
}
