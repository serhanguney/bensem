import styles from "../../styles/components/Layout.module.scss";

export default function Additionals({ children }) {
  return <div className={styles.additionalText}>{children}</div>;
}
