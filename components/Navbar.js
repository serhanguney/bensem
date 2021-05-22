import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.scss";
import { domAnimation, LazyMotion, m } from "framer-motion";
export default function Navbar() {
  const navbarLinks = [
    { path: "/", title: "home" },
    { path: "/digital", title: "digital" },
    { path: "/real-estate", title: "real estate" },
    { path: "/contact", title: "contact" },
  ];
  const router = useRouter();

  const variants = {
    initial: { y: "0%" },
    animate: { y: "100%", transition: { duration: 0.6, delay: 0.5 } },
    exit: { y: "0%", transition: { duration: 0.6 } },
  };
  return (
    <LazyMotion features={domAnimation}>
      <ul className={styles.navbarContainer}>
        <m.div className={styles.animatingOverlay} variants={variants}></m.div>
        {navbarLinks.map((item, index) => (
          <Link key={index} href={item.path}>
            <li className={router.pathname === item.path ? styles.active : ""}>
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </LazyMotion>
  );
}
