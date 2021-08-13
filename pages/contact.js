import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../Context";
import styles from "../styles/contact.module.scss";
import Info from "../components/SVG/location";
import Location from "../components/SVG/location";
import Phone from "../components/SVG/phone";
import Email from "../components/SVG/email";
import { m } from "framer-motion";
import Layout from "../components/Layout/Layout";
import content from "../content/index.json";

export default function contact() {
  // const { register, handleSubmit, reset } = useForm();
  const { pageLayout, language } = useGlobalContext();
  // const [isLoading, setIsLoading] = useState(false);
  // const [isAgreed, setIsAgreed] = useState(false);
  // const formFields = [
  //   { name: "fullName", message: "Please enter your name", icon: <Info /> },
  //   { name: "email", message: "Please enter your email", icon: <Email /> },
  // ];
  //animation variants
  const variants = {
    initial: (i) => ({ x: i * 20, opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: (i) => ({ x: i * 20, opacity: 0, transition: { duration: 0.6 } }),
  };
  // async function sendEmail(data) {
  //   if (!isAgreed) {
  //     return;
  //   }

  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("/api/email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //     const result = await response.text();
  //     console.log("request result", result);
  //     reset();
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error);
  //   }
  // }
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
        <p className={styles.phone}>+490773621774</p>
        <p className={styles.location}>
          <span>Rehorova 1004/32, 13000, Praha, Czechia</span>
        </p>
      </m.div>
      {/* <m.form
        method="post"
        className={styles.form}
        onSubmit={handleSubmit((data) => sendEmail(data))}
        variants={variants}
        custom={1}
      >
        <h2 className={styles.formTitle}>Your message</h2>
        {formFields.map((field) => (
          <div key={field.name} className={`${styles.inputContainer} input`}>
            {field.icon}
            <input
              type="text"
              className={styles.input}
              {...register(field.name, {
                required: field.message,
              })}
              placeholder={field.name}
            />
          </div>
        ))}
        <div className={`${styles.inputContainer} message`}>
          <Message />
          <textarea
            className={styles.message}
            type="textarea"
            {...register("message", {
              required: "please enter your message",
            })}
            placeholder="message"
          />
        </div>
        <div className={styles.checkboxContainer}>
          <label htmlFor="terms" className={styles.terms}>
            {content[language].contact.consent}
          </label>
          <input
            type="checkbox"
            id="terms"
            {...register("terms", {
              required: "Make sure to agree to terms",
            })}
            value={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
          />
        </div>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={isLoading}
        >
          {content[language].contact.button}
        </button>
      </m.form> */}

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
