// ReactJS imports
import { useState } from "react";

// NextJS imports
import Link from "next/link";

// Styles
import styles from "../styles/components/NavBar.module.css";

// Icons
import { IoMenu } from "react-icons/io5";

// Types
import { availableTabs } from "../types/navigation";
import { sleep } from "../config/helpers";
type props = {
  selectedTabName: availableTabs;
};

// Main react component
export default function NavBar({ selectedTabName }: props) {
  // State handlers
  const [displayPopup, setDisplayPopup] = useState(false);
  const [displayPopupBackground, setDisplayPopupBackground] =
    useState(displayPopup);

  // Functions
  const hanldePopup = async (display: boolean) => {
    // Show it
    if (display) {
      setDisplayPopup(true);
      await sleep(100);
      setDisplayPopupBackground(true);
      return;
    }

    // Hide it
    setDisplayPopupBackground(false);
    await sleep(100);
    setDisplayPopup(false);
  };

  // Actual react component
  return (
    <>
      {/* Popup */}
      {displayPopup ? (
        <div
          onClick={() => hanldePopup(!displayPopup)}
          className={`${styles.popupBackground} ${
            styles[
              displayPopupBackground
                ? "popupBackgroundDisplayed"
                : "popupBackgroundHidden"
            ]
          }`}
        />
      ) : null}
      <nav
        className={`${styles.popup} ${
          styles[displayPopup ? "popupDisplayed" : "popupHidden"]
        }`}
      >
        <Link href="/">
          <a
            className={`${styles.navItemTxt} ${styles.navItemTxtPopup} ${
              styles[selectedTabName === "HOME" ? "navItemSelected" : null]
            }`}
          >
            HOME
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={`${styles.navItemTxt} ${styles.navItemTxtPopup} ${
              styles[selectedTabName === "PROJECTS" ? "navItemSelected" : null]
            }`}
          >
            PROJECTS
          </a>
        </Link>
        <Link href="/aboutMe">
          <a
            className={`${styles.navItemTxt} ${styles.navItemTxtPopup} ${
              styles[selectedTabName === "ABOUT ME" ? "navItemSelected" : null]
            }`}
          >
            ABOUT ME
          </a>
        </Link>

        {/* Contact btn */}
        <Link href="/contact">
          <a className={`${styles.contact} ${styles.contactPopup}`}>
            LET&apos;S WORK TOGETHER
          </a>
        </Link>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        {/* Hamburguer menu */}
        <button
          className={styles.hamburguerContainer}
          onClick={() => hanldePopup(!displayPopup)}
        >
          <IoMenu className={styles.hamburguer} />
        </button>

        {/* Title */}
        <Link href="/" className={styles.navItem}>
          <div className={styles.titleContainer}>
            <h3 className={styles.developer}>Developer</h3>
            <h1 className={styles.title}>Ulises Aviles</h1>
          </div>
        </Link>

        {/* Tabs */}
        <nav className={styles.tabs}>
          <Link href="/">
            <a
              className={`${styles.navItemTxt} ${
                styles[selectedTabName === "HOME" ? "navItemSelected" : null]
              }`}
            >
              HOME
            </a>
          </Link>
          <Link href="/projects">
            <a
              className={`${styles.navItemTxt} ${
                styles[
                  selectedTabName === "PROJECTS" ? "navItemSelected" : null
                ]
              }`}
            >
              PROJECTS
            </a>
          </Link>
          <Link href="/aboutMe">
            <a
              className={`${styles.navItemTxt} ${
                styles[
                  selectedTabName === "ABOUT ME" ? "navItemSelected" : null
                ]
              }`}
            >
              ABOUT ME
            </a>
          </Link>

          {/* Contact btn */}
          <Link href="/contact">
            <a className={styles.contact}>LET'S WORK TOGETHER</a>
          </Link>
        </nav>
      </header>
    </>
  );
}
