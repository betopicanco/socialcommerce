import { GetStaticPropsContext, NextPage } from "next";

import Layout from "../../components/Layout";
import CartMain from "../../components/Cart/index";
import BottomMenu from "../../components/BottomMenu";
import ShoppingCart from "../../components/Icons/ShoppingCart";
import Mail from "../../components/Icons/Mail";
import LoginIcon from "../../components/Icons/Login";
import axios from "axios";
import PostInterface from "../../components/Post/interface";

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          items: ['1']
        }
      }
    ],
    fallback: 'blocking'
  }
}

// transforma os ids da url em string no formato /1/2
const toPath = (itemsID: string | string[] | undefined) => {
  let idList = '';
  if(typeof itemsID === 'object') {
    itemsID.forEach(id => {
      idList += '/' + id  
    });
  } else {
    idList = '/' + itemsID;
  }

  return idList;
}

export async function getStaticProps(
  context: GetStaticPropsContext
) {
  const itemsID = context.params?.items;
  
  const pathIds = toPath(itemsID);
  const path = `https://socialcommerce.vercel.app/api/cart/${pathIds}`;
  const cartItems = await axios.get(path);

  return {
    props: {
      items: cartItems.data
    }
  }
}

const Cart: NextPage = (props: any) => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/teste', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
  ];
  const { items } = props;
  
  return (
    <div className={`bg-neutral-800 h-screen`}>
      <Layout menuItems={menuItems}>
        <>
          <CartMain cartItems={items}/>
          <BottomMenu/>
        </>
      </Layout>
    </div>
  );
}

export default Cart;