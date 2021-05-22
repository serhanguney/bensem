import styles from "../../styles/components/Layout.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
export default function TextContainer({ children }) {
  const variants = {
    initial: { x: -40, opacity: 0 },
    animate: { x: 0, opacity: 0.6, transition: { duration: 0.6 } },
    exit: { x: -40, opacity: 0, transition: { duration: 0.6 } },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div className={styles.textContainer} variants={variants}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
