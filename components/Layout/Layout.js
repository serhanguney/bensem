import styles from "../../styles/components/Layout.module.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { useEffect } from "react";
export default function Layout({ children }) {
  const variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.02 },
    },
    exit: { opacity: 1 },
  };
  useEffect(() => console.log(window.innerHeight, window.innerWidth), []);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={styles.pageContainer}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
