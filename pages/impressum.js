import Layout from "../components/Layout/Layout";
import styles from "../styles/impressum.module.scss";
import content from "../content/index.json";
import { useGlobalContext } from "../Context";
export default function Impressum() {
  const { pageLayout } = useGlobalContext();
  return (
    <Layout>
      {pageLayout(
        {
          circleColor: "white",
          shadeColor: "#e5e5e590",
          lineColor: "#754f44",
        },
        {
          url: "https://images.unsplash.com/photo-1567794636765-5e4869f627e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1haWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
          mobile: false,
        }
      )}
      <div className={styles.pageContainer}>
        <h1>Impressum</h1>
        {content.impressum.map((item, index) => (
          <div key={index} className={styles.block}>
            <h3>{item.title}</h3>
            {item.text.split("-").length > 1 ? (
              item.text
                .split("-")
                .map((line, index) => <p key={index}>{line}</p>)
            ) : (
              <p>{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </Layout>
  );
}
