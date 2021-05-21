import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/components/Navbar.module.scss";

export default function Navbar() {
  const navbarLinks = [
    { path: "/", title: "home" },
    { path: "/digital", title: "digital" },
    { path: "/real-estate", title: "real estate" },
    { path: "/contact", title: "contact" },
  ];
  const router = useRouter();
  return (
    <ul className={styles.navbarContainer}>
      {navbarLinks.map((item, index) => (
        <Link key={index} href={item.path}>
          <li className={router.pathname === item.path ? styles.active : ""}>
            {item.title}
          </li>
        </Link>
      ))}
    </ul>
  );
}
