import axios from "axios";
import { GetStaticPropsContext, NextPage } from "next";
import Mail from "../../components/Icons/Mail";
import Layout from "../../components/Layout";
import Post from "../../components/Post";
import PostInterface from "../../components/Post/interface";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1'
        },
      },
      {
        params: {
          id: '2'
        },
      },
    ],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id;
  const path = `https://socialcommerce.vercel.app/api/posts/${id}`;
  const props = await axios.get(path);

  return {
    props: {
      post: props.data
    }
  }
}

const PostPage: NextPage = (props: any) => {
  const mail = <Mail style='h-4 w-4 stroke-yellow-300'/>
  const menuItems = [
    {href: '/teste', title: 'chat', icon: mail},
  ];

  const { post } = props;

  return (
    <Layout menuItems={menuItems}>
      <main className={` bg-neutral-800 text-white`}>
        <section className={` h-full sm:w-2/3 mx-auto `}>
          <Post
            key={post.id}
            data={post}
          />
        </section>
      </main>
    </Layout>
  );
}

export default PostPage;