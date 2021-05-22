import Context from "../Context";
import "../styles/globals.scss";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Context key={router.route}>
        <Component {...pageProps} />
      </Context>
    </AnimatePresence>
  );
}

export default MyApp;
