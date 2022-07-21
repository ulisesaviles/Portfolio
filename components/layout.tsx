// NextJS imports
import Head from "next/head";

// Styles
import styles from "../styles/pages/Home.module.css";

// Components
import NavBar from "../components/navBar";

// Types
import { availableTabs } from "../types/navigation";
type props = {
  children: JSX.Element;
  selectedTabName: availableTabs;
};

// Main react component
export default function Layout({ children, selectedTabName }: props) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="lang" content="en" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/ulisesaviles/Portfolio/main/public/assets/og.jpg"
        />
      </Head>
      <NavBar selectedTabName={selectedTabName} />
      {children}
    </>
  );
}
