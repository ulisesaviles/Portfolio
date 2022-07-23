// NextJS imports
import Head from "next/head";

// Styles
import styles from "../styles/pages/Contact.module.css";
import btnStyles from "../styles/components/Button.module.css";

// Components
import Layout from "../components/layout";

// Notifications https://fkhadra.github.io/react-toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from "react-icons/si";

// Main react component
export default function Contact() {
  // Functions
  const handleSocialMediaClick = (
    socialMedia: "linkedin" | "github" | "whatsapp" | "mail"
  ) => {
    if (socialMedia === "linkedin")
      window.open("https://www.linkedin.com/in/ulises-aviles-07b06b1a4/");
    if (socialMedia === "github")
      window.open("https://github.com/ulisesaviles/");
    if (socialMedia === "whatsapp" || socialMedia === "mail") {
      navigator.clipboard.writeText(
        socialMedia === "whatsapp"
          ? "+5216644053411"
          : "ulisesaviles.dev@gmail.com"
      );
      const message = `My ${socialMedia} was coppied to your clipboard!`;
      toast.success(message, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // JSX
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
          {/* Info */}
          <section className={styles.leftContainer}>
            <h1 className={styles.title}>I would be happy to work with you!</h1>
            <p className={styles.description}>
              No matter the size of the project, I will develop great solutions
              to help you grow your business. Even if you still don&apos;t have
              a clear idea of the project you want me to develop, get in touch
              with me. I would love to hear your idea and figure out how I can
              help you. I will guide you through the process seamlessly. Right
              now I&apos;m looking for freelance work, but let me know if you
              have a great job offer for me! Send me an email or contact me via
              social media!
            </p>
            <div className={styles.socialMediaContainer}>
              <button
                className={styles.socialMedia}
                onClick={() => handleSocialMediaClick("linkedin")}
              >
                <SiLinkedin />
              </button>
              <button
                className={styles.socialMedia}
                onClick={() => handleSocialMediaClick("github")}
              >
                <SiGithub />
              </button>
              <button
                className={styles.socialMedia}
                onClick={() => handleSocialMediaClick("whatsapp")}
              >
                <SiWhatsapp />
              </button>
              <button
                className={styles.socialMedia}
                onClick={() => handleSocialMediaClick("mail")}
              >
                <SiGmail />
              </button>
            </div>
          </section>

          {/* Form */}
          <section className={styles.formContainer}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Submit");
              }}
            >
              {/* Name */}
              <h2 className={styles.inputName}>Your name</h2>
              <input className={styles.input} placeholder="Enter your name" />

              {/* Company */}
              <h2 className={styles.inputName}>Your company</h2>
              <input
                className={styles.input}
                placeholder="Enter the name of your company"
              />

              {/* Email */}
              <h2 className={styles.inputName}>Your email</h2>
              <input
                className={styles.input}
                placeholder="Enter your email to contact you"
                type={"email"}
              />

              {/* City */}
              <h2 className={styles.inputName}>City, country</h2>
              <input
                className={styles.input}
                placeholder="Enter your city and country"
              />

              {/* Message */}
              <h2 className={styles.inputName}>Message</h2>
              <textarea
                className={`${styles.input} ${styles.textArea}`}
                placeholder="Let me know why you are reaching out!"
              />

              {/* Submit */}
              <div className={styles.submitSectionContainer}>
                <p className={styles.letsStart}>
                  Let's start building something great!
                </p>
                <input type={"submit"} className={btnStyles.button} />
              </div>
            </form>
          </section>

          {/* Notifications */}
          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
      </Layout>
    </div>
  );
}
