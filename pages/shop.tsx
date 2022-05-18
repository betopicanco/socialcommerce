import axios from "axios";
import { NextPage } from "next";
import BottomMenu from "../components/BottomMenu";
import Layout from "../components/Layout";
import PostInterface from "../components/Post/interface";
import ShopItem from "../components/Shop/ShopItem";

export async function getStaticProps(context: any) {
  const path = 'https://socialcommerce.vercel.app/api/shop';
  const products = await axios.get(path)

  return {
    props: {
      products: products.data
    }
  }
}

const Shop: NextPage = (props: any) => {
  const menuItems = [
    {href: '/login', title: 'login'},
    {href: '/teste', title: 'chat'},
    {href: '/cart', title: 'compras'}
  ];
  const { products } = props;

  return (
    <>
      <Layout menuItems={menuItems}>
        <>
          <main className={`bg-neutral-800 text-white h-screen`}>
            <div className={` grid grid-cols-2 `}>
              {products.map((p: PostInterface) => {
                return (
                  <ShopItem product={p} key={p.id}/>
                )
              })}
            </div>
          </main>
          <BottomMenu/>
        </>
      </Layout>
    </>
  );
}

export default Shop;