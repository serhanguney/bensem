import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGlobalContext } from "../Context";
import styles from "../styles/contact.module.scss";
import Info from "../components/SVG/info";
import Message from "../components/SVG/message";
import Email from "../components/SVG/email";

export default function contact() {
  const { register, handleSubmit, reset } = useForm();
  const pageLayout = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const formFields = [
    { name: "name", message: "Please enter your name", icon: <Info /> },
    { name: "email", message: "Please enter your email", icon: <Email /> },
  ];
  async function sendEmail(data) {
    try {
      setIsLoading(true);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response.json());
      reset();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  return (
    <div className={styles.pageContainer}>
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
      <div className={styles.titleContainer}>
        <h1>bensem</h1>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>contact</h1>
        <p className={styles.paragraph}>
          If you are looking for affordable housing, or If you care about the
          quality of your company’s digital first impression send us a message
          and lets discuss.
        </p>
      </div>

      <form
        method="post"
        className={styles.form}
        onSubmit={handleSubmit((data) => sendEmail(data))}
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
        <button
          className={styles.submitButton}
          type="submit"
          disabled={isLoading}
        >
          send
        </button>
      </form>
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
    </div>
  );
}
