import styles from "../../styles/components/Layout.module.scss";
import { m, LazyMotion, domAnimation } from "framer-motion";
export default function Layout({ children, pageStyle = null }) {
  const variants = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: { delayChildren: 0.5, staggerChildren: 0.02 },
    },
    exit: { opacity: 1 },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={pageStyle ? pageStyle : styles.pageContainer}
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
