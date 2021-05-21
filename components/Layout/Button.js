import Link from "next/link";
import styles from "../../styles/components/Layout.module.scss";
export default function Button() {
  return (
    <Link href="/contact">
      <a className={styles.goToButton}>Contact</a>
    </Link>
  );
}
