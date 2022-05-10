import { NextPage } from "next";

import Layout from "../components/Layout";
import CartMain from "../components/Cart/index";
import BottomMenu from "../components/BottomMenu";
import ShoppingCart from "../components/Icons/ShoppingCart";
import Mail from "../components/Icons/Mail";
import LoginIcon from "../components/Icons/Login";

const Cart:NextPage = () => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/teste', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
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