// NextJS imports
import Link from "next/link";

// Styles
import styles from "../styles/components/Button.module.css";

// React component
const Button = ({
  fontSize,
  href,
  txt,
}: {
  fontSize: number;
  href: string;
  txt: string;
}) => {
  return (
    <Link href={href}>
      <a
        className={styles.button}
        style={{
          fontSize: fontSize,
          paddingTop: fontSize * 0.6,
          paddingBottom: fontSize * 0.6,
          paddingInline: fontSize * 2.5,
          borderRadius: (fontSize * 2) / 3,
        }}
      >
        {txt}
      </a>
    </Link>
  );
};
export default Button;
