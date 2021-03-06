import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/Menu.module.scss";
import { useGlobalContext } from "../Context";

export default function Menu({ componentStyling }) {
  const [toggle, setToggle] = useState(false);
  const { setLanguage } = useGlobalContext();
  const menuLinks = [
    { path: "/", title: "Home" },
    { path: "/real-estate", title: "Real Estate" },
    { path: "/digital", title: "Digital" },
    { path: "/contact", title: "Contact" },
  ];

  function handleLanguage(e) {
    setToggle(false);
    setLanguage(e.target.innerHTML.toLowerCase());
  }
  return (
    <>
      <div className={`${styles.iconContainer} ${toggle ? styles.active : ""}`}>
        <div className={styles.circleShade}></div>
        <button
          className={`${styles.circle} jsx-circle`}
          onClick={() => setToggle((prev) => !prev)}
        >
          <span className="jsx-lines" />
          <span className="jsx-lines" />
          <span className="jsx-lines" />
        </button>
      </div>
      <div className={`${styles.overlay} ${toggle ? styles.reveal : ""}`}></div>
      <div
        className={`${styles.menuBoard} ${
          toggle ? `${styles.reveal} ${styles.slide}` : ""
        }`}
      >
        <ul>
          {menuLinks.map((link) => (
            <li key={link.title}>
              <Link href={link.path}>
                <a onClick={() => setToggle(false)}>{link.title}</a>
              </Link>
              <h1></h1>
            </li>
          ))}
          <li className={styles.languages}>
            <button onClick={(e) => handleLanguage(e)}>EN</button>
            <button onClick={(e) => handleLanguage(e)}>DE</button>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .jsx-circle {
          background-color: ${componentStyling.circleColor};
        }
        .jsx-circle-shade {
          background-color: ${componentStyling.shadeColor};
        }
        .jsx-lines {
          background-color: ${componentStyling.lineColor};
        }
      `}</style>
    </>
  );
}
