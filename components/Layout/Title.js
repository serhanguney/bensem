import styles from "../../styles/components/Layout.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
export default function Title() {
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
    <LazyMotion features={domAnimation}>
      <m.div className={styles.titleContainer} variants={variants}>
        <h1>bensem</h1>
      </m.div>
    </LazyMotion>
  );
}
