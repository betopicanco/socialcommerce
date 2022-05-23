import axios from "axios";
import { GetStaticPropsContext } from "next";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  // const profile = await axios.get()

  return {
    props: {
      id: id
    }
  }
}

const Profile = (props: any) => {
  const {id} = props;
  console.log(id);
  return (
    <DefaultBG>
      <Layout>
        <main>

        </main>
      </Layout>
    </DefaultBG>
  );
}

export default Profile;