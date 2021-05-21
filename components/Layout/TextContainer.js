import styles from "../../styles/components/Layout.module.scss";

export default function TextContainer({ children }) {
  return <div className={styles.textContainer}>{children}</div>;
}
