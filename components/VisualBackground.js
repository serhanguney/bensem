import styles from "../styles/components/VisualBackground.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
export default function VisualBackground({ url }) {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.6 } },
  };
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={`${styles.visualBackground} jsx-image`}
        variants={variants}
      >
        <style>{`
          .jsx-image {
            background: url(${url}) 50% 50% no-repeat;
            background-size: cover;
          }
        `}</style>
      </m.div>
    </LazyMotion>
  );
}
