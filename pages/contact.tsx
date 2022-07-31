// React imports
import { FormEvent, useState } from "react";

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

// Email sender
import emailjs from "@emailjs/browser";

// Icons
import { SiLinkedin, SiGithub, SiWhatsapp, SiGmail } from "react-icons/si";

// Main react component
export default function Contact() {
  // Constants
  const serviceID = "service_6favyzr";
  const templateID = "portfolioContactForm";
  const publicKey = "5WlNPqH9j2o7SvQqD";
  const [inputValues, setInputValues] = useState({
    name: "",
    company: "",
    email: "",
    city: "",
    message: "",
  });

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

  const submitEmail = async (e?: FormEvent<HTMLFormElement>) => {
    if (e != null) e.preventDefault();

    // Validate inputs
    if (!validateInputs()) return;

    // Notificate User
    toast.promise(
      // Send email
      emailjs.send(serviceID, templateID, inputValues, publicKey),
      {
        error: "There was an error sending your email😒",
        success: "Sent succesfully!🎉",
        pending: "Sending",
      },
      {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      }
    );
  };

  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  const validateInputs = (): boolean => {
    let errorMessage: string;

    // Message
    if (inputValues.message.length < 5)
      errorMessage = "Enter a message of at least 5 characters.";

    // City
    if (inputValues.city.length < 5)
      errorMessage = "Enter your city and country correctly.";

    // Email
    if (!validateEmail(inputValues.email)) errorMessage = "Enter a valid email";

    // Company
    if (typeof inputValues.company !== "string")
      errorMessage = "Enter the name of your company.";

    // Name
    if (inputValues.name.length < 3)
      errorMessage = "Enter your name correctly.";

    // Notificate error
    if (errorMessage != undefined) {
      toast.error(errorMessage, {
        position: "bottom-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      return false;
    }

    return true;
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
            <form onSubmit={submitEmail}>
              {/* Name */}
              <h2 className={styles.inputName}>Your name</h2>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  placeholder="Enter your name"
                  onChange={(e) =>
                    setInputValues({
                      ...inputValues,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              {/* Company */}
              <h2 className={styles.inputName}>Your company</h2>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  placeholder="(Optional)"
                  onChange={(e) =>
                    setInputValues({
                      ...inputValues,
                      company: e.target.value,
                    })
                  }
                />
              </div>

              {/* Email */}
              <h2 className={styles.inputName}>Your email</h2>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  placeholder="Enter your email to contact you"
                  type={"email"}
                  onChange={(e) =>
                    setInputValues({
                      ...inputValues,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* City */}
              <h2 className={styles.inputName}>City, country</h2>
              <div className={styles.inputContainer}>
                <input
                  className={styles.input}
                  placeholder="Enter your city and country"
                  onChange={(e) =>
                    setInputValues({
                      ...inputValues,
                      city: e.target.value,
                    })
                  }
                />
              </div>

              {/* Message */}
              <h2 className={styles.inputName}>Message</h2>
              <div className={styles.inputContainer}>
                <textarea
                  className={`${styles.input} ${styles.textArea}`}
                  placeholder="Let me know why you are reaching out!"
                  onChange={(e) =>
                    setInputValues({
                      ...inputValues,
                      message: e.target.value,
                    })
                  }
                />
              </div>

              {/* Submit */}
              <div className={styles.submitSectionContainer}>
                <p className={styles.letsStart}>
                  Let&apos;s start building something great!
                </p>
                <button className={btnStyles.button}>Submit</button>
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
