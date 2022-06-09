import axios from "axios";
import { GetStaticPropsContext } from "next";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";
import ProfileProvider from "../../Context/ProfileProvider";
import ProfileMain from "../../components/Profile";
import BottomMenu from "../../components/BottomMenu";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' }, }, 
      { params: { id: '2' }, },
      { params: { id: '3' }, }
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext
) {
  const id = context.params?.id;
  const path = `https://socialcommerce.vercel.app/api/profile/${id}`;
  const profile = await axios.get(path);

  return { props: { profile: profile.data } }
}

interface ProfilePageProps {
  profile: {
    id: number,
    pic: string,
    name: string,
    bio: string
  }
}

const ProfilePage = (props: ProfilePageProps) => {
  return (
    <DefaultBG>
      <Layout>
        <ProfileProvider profile={props.profile}>
          <>
            <ProfileMain/>
            <BottomMenu/>
          </>
        </ProfileProvider>
      </Layout>
    </DefaultBG>
  );
}

export default ProfilePage;