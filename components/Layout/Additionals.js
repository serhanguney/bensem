import styles from "../../styles/components/Layout.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
import { useGlobalContext } from "../../Context";
export default function Additionals({ children, klass = null }) {
  const { width } = useGlobalContext();
  console.log(width);
  const variants = {
    initial: { x: -40, opacity: 0 },
    animate: {
      x: 0,
      opacity: width < 600 ? 0.6 : 0.3,
      transition: { duration: 0.6 },
    },
    exit: { x: -40, opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`${styles.additionalText} ${klass ? styles[klass] : ""}`}
        variants={variants}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
