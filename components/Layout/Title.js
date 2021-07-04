import styles from "../../styles/components/Layout.module.scss";
import { m } from "framer-motion";
export default function Title({ klass = null }) {
  const variants = {
    initial: { x: 40, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: {
      x: 40,
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <m.div
      className={`${styles.titleContainer} ${klass ? styles[klass] : ""}`}
      variants={variants}
    >
      <h1>bensem</h1>
    </m.div>
  );
}
