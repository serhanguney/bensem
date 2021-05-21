import styles from "../../styles/components/Layout.module.scss";

export default function Layout({ children }) {
  return <div className={styles.pageContainer}>{children}</div>;
}
