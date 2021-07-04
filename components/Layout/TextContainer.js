import styles from "../../styles/components/Layout.module.scss";
import { m } from "framer-motion";
export default function TextContainer({ children, klass = null }) {
  const variants = {
    initial: { x: -40, opacity: 0 },
    animate: { x: 0, opacity: 0.9, transition: { duration: 0.6 } },
    exit: { x: -40, opacity: 0, transition: { duration: 0.6 } },
  };
  return (
    <m.div
      className={`${styles.textContainer} ${klass ? styles[klass] : ""}`}
      variants={variants}
    >
      {children}
    </m.div>
  );
}
