import { NextPage } from "next";
import DefaultBG from "../components/DefaultBG";
import Layout from "../components/Layout";
import PublishArea from "../components/PublishArea";

const Publish: NextPage = () => {
  return (
    <DefaultBG>
      <Layout>
        <PublishArea/>
      </Layout>
    </DefaultBG>
  );
}

export default Publish;