import styles from "../styles/components/VisualBackground.module.scss";
export default function VisualBackground({ url }) {
  return (
    <div className={`${styles.visualBackground} jsx-image`}>
      <style jsx>{`
        .jsx-image {
          background: url(${url}) 50% 50% no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
}
