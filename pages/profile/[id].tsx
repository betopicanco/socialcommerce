import axios from "axios";
import { GetStaticPropsContext } from "next";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";
import ProfileProvider from "../../Context/ProfileProvider";
import ProfileMain from "../../components/Profile";
import BottomMenu from "../../components/BottomMenu";
import profile from "../api/profile/interface";
import PostInterface from "../../components/Post/interface";

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
  const profilePath = `https://socialcommerce.vercel.app/api/profile/${id}`;
  const feedPath = `https://socialcommerce.vercel.app/api/profile/posts/${id}`;
  const profile = await axios.get(profilePath);
  const feed = await axios.get(feedPath);

  return { 
    props: { 
      profile: profile.data,
      feed: feed.data
    } 
  }
}

interface ProfilePageProps {
  profile: profile,
  feed: PostInterface[]
}

const ProfilePage = (props: ProfilePageProps) => {
  const { feed, profile } = props;
  
  return (
    <DefaultBG>
      <Layout>
        <ProfileProvider profile={profile} feed={feed}>
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