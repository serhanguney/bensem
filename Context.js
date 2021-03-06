import { createContext, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import TiltedTitle from "./components/TiltedTitle";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export default function Context({ children }) {
  const [width, setWidth] = useState();
  const [language, setLanguage] = useState("de");
  const Navbar = dynamic(() => import("./components/Navbar"));
  const Menu = dynamic(() => import("./components/Menu"));
  const VisualBackground = dynamic(() =>
    import("./components/VisualBackground")
  );

  //combine page layout into one function to be re-used in various pages
  const pageLayout = (menuStyle, visual) => {
    return (
      <>
        {width && width > 960 ? (
          <>
            <Navbar />
            {visual?.url && <VisualBackground url={visual.url} />}
          </>
        ) : (
          <>
            <Menu componentStyling={menuStyle} />
            {visual?.mobile && <VisualBackground url={visual.url} />}
          </>
        )}
        <TiltedTitle />
      </>
    );
  };
  useEffect(() => {
    setWidth(window.innerWidth);

    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    window.addEventListener("resize", function handleResize() {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    return () => {
      window.removeEventListener("resize", function handleResize() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      });
    };
  }, []);
  return (
    <GlobalContext.Provider
      value={{ pageLayout, width, language, setLanguage }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
