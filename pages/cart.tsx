import { NextPage } from "next";

import CartMain from "../components/Cart";
import BottomMenu from "../components/BottomMenu";
import Layout from "../components/Layout";

const Cart:NextPage = () => {
  return (
    <div className={`bg-neutral-800`}>
      <Layout>
        <>
          <CartMain/>
          <BottomMenu/>
        </>
      </Layout>
    </div>
  );
}

export default Cart;