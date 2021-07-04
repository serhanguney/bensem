import Link from "next/link";
import styles from "../../styles/components/Layout.module.scss";
import { m } from "framer-motion";
import { useGlobalContext } from "../../Context";
export default function Button({ klass }) {
  const { width } = useGlobalContext();
  //note here that on mobile the animation changes direction.
  const variants = {
    initial: { x: width < 620 ? -20 : 20, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: {
      x: width < 620 ? -20 : 20,
      opacity: 0,
      transition: { duration: 0.6 },
    },
  };
  return (
    <Link href="/contact">
      <m.a
        className={`${styles.goToButton} ${klass ? styles[klass] : ""}`}
        variants={variants}
        whileHover={{
          backgroundColor: "#754f44",
          color: "white",
          transition: { duration: 0.1 },
        }}
        whileFocus={{
          backgroundColor: "white",
          color: "#754f44",
          transition: { duration: 0.1 },
        }}
      >
        Contact
      </m.a>
    </Link>
  );
}
