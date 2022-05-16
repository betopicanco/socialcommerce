import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";
import Mail from "../../components/Icons/Mail";
import Layout from "../../components/Layout";
import Post from "../../components/Post";

const fetcher = (url: string) => fetch(url).then((res) => res.json()) 

const PostPage: NextPage = () => {
  const mail = <Mail style='h-4 w-4 stroke-yellow-300'/>
  const menuItems = [
    {href: '/teste', title: 'chat', icon: mail},
  ];
  const id = useRouter().query.id;
  const path = `/api/posts/${id}`;
  const {data: post, error} = useSWR(path, fetcher);
  if(!post) {
    return (
      <div>
        Carregando...
      </div>
    )
  }

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