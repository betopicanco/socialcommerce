import axios from "axios";
import { GetStaticPropsContext, NextPage } from "next";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";
import Post from "../../components/Post";

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
  const { post } = props;

  return (
    <DefaultBG>
      <Layout>
        <main>
          <section className={` sm:w-2/3 mx-auto `}>
            <Post
              key={post.id}
              data={post}
            />
          </section>
        </main>
      </Layout>
    </DefaultBG>
  );
}

export default PostPage;