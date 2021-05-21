import { useGlobalContext } from "../Context";
import Layout from "../components/Layout/Layout";
import Additionals from "../components/Layout/Additionals";
import Button from "../components/Layout/Button";
import TextContainer from "../components/Layout/TextContainer";
import Title from "../components/Layout/Title";

export default function realEstate() {
  const pageLayout = useGlobalContext();
  const visualURL =
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80";
  return (
    <Layout>
      {pageLayout(
        {
          circleColor: "white",
          shadeColor: "#e5e5e590",
          lineColor: "#754f44",
        },
        { url: visualURL, mobile: true }
      )}
      <Title />
      <TextContainer>
        <h2>housing</h2>
        <br />
        <h2>{`&`}</h2>
        <br />
        <h2>
          digital <br />
          services{" "}
        </h2>
      </TextContainer>
      <Additionals>
        <p>
          Our services include creating presentational websites for individuals
          and companies
        </p>
      </Additionals>
      <Button />
    </Layout>
  );
}
