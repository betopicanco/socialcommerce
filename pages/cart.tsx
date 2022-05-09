import { NextPage } from "next";
import Layout from "../components/Layout";
import CartMain from "../components/Cart/index";
import BottomMenu from "../components/BottomMenu";

const Cart:NextPage = () => {
  const menuItems = [
    {href: '/', title: 'home'}
  ];
  
  return (
    <div className={`bg-neutral-800`}>
      <Layout menuItems={menuItems}>
        <>
          <CartMain/>
          <BottomMenu/>
        </>
      </Layout>
    </div>
  );
}

export default Cart;