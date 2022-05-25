import axios from "axios";
import { GetStaticPropsContext } from "next";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";
import Bio from "../../components/Profile/Bio";

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
  const path = `https://socialcommerce.vercel.app/api/profile/${id}`;
  const profile = await axios.get(path)

  return {
    props: {
      profile: profile.data
    }
  }
}

const Profile = (props: any) => {
  const {profile} = props;

  return (
    <DefaultBG>
      <Layout>
        <main>
          <Bio profile={profile}/>
        </main>
      </Layout>
    </DefaultBG>
  );
}

export default Profile;