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

  const basePath = 'https://socialcommerce.vercel.app/api/profile/';
  const profilePath = basePath + `${id}`;
  const feedPath = basePath + `posts/${id}`;
  const shopPath = basePath + `shop/${id}`;

  const profile = await axios.get(profilePath);
  const feed = await axios.get(feedPath);
  const shop = await axios.get(shopPath);

  return { 
    props: { 
      profile: profile.data,
      feed: feed.data,
      shop: shop.data
    } 
  }
}

interface ProfilePageProps {
  profile: profile,
  feed: PostInterface[],
  shop: PostInterface[],
}

const ProfilePage = (props: ProfilePageProps) => {
  const { feed, profile, shop } = props;
  console.log(shop);
  return (
    <DefaultBG>
      <Layout>
        <ProfileProvider 
          profile={profile} 
          feed={feed}
          shop={shop}>
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