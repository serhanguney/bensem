import Head from "next/head";
import { useGlobalContext } from "../Context";
import styles from "../styles/contact.module.scss";
import { m } from "framer-motion";
import Layout from "../components/Layout/Layout";
import content from "../content/index.json";

export default function contact() {
  const { pageLayout, language } = useGlobalContext();

  //animation variants
  const variants = {
    initial: (i) => ({ x: i * 20, opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: (i) => ({ x: i * 20, opacity: 0, transition: { duration: 0.6 } }),
  };

  return (
    <Layout pageStyle={styles.pageContainer}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {pageLayout(
        { circleColor: "#754f44", shadeColor: "#ffeedf", lineColor: "white" },
        {
          url: "https://images.unsplash.com/photo-1567794636765-5e4869f627e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1haWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          mobile: false,
        }
      )}
      <m.div className={styles.titleContainer} variants={variants} custom={1}>
        <h1>bensem</h1>
      </m.div>
      <m.div className={styles.textContainer} variants={variants} custom={-1}>
        <h1 className={styles.title}>{content[language].contact.title}</h1>
        <p className={styles.paragraph}>{content[language].contact.p1}</p>
      </m.div>
      <m.div className={styles.contactInfo} variants={variants} custom={1}>
        <p className={styles.message}>info@bensem.eu</p>
        <p className={styles.phone}>+49 176 43404894</p>
        <p className={styles.location}>
          <span>Johanniterstr. 5 74177 Bad Friedrichshall Germany</span>
        </p>
      </m.div>

      <style jsx>
        {`
          .input {
            min-height: 60px;
          }
          .message {
            min-height: 100px;
          }
        `}
      </style>
    </Layout>
  );
}
