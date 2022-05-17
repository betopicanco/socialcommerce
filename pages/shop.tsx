import { NextPage } from "next";
import Layout from "../components/Layout";

const Shop: NextPage = (props) => {
  const menuItems = [
    {href: '/login', title: 'login'},
    {href: '/teste', title: 'chat'},
    {href: '/cart', title: 'compras'}
  ];

  return (
    <>
      <Layout menuItems={menuItems}>
        <main className={`bg-neutral-800 text-white`}>
          
        </main>
      </Layout>
    </>
  );
}

export default Shop;