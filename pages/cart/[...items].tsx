import { GetStaticPropsContext, NextPage } from "next";

import Layout from "../../components/Layout";
import CartMain from "../../components/Cart/index";
import BottomMenu from "../../components/BottomMenu";
import axios from "axios";
import DefaultBG from "../../components/DefaultBG";

export async function getStaticPaths() {
  return {
    paths: [
      { params: { items: ['1'] } }
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
    props: { items: cartItems.data }
  }
}

const Cart: NextPage = (props: any) => {
  const { items } = props;
  
  return (
    <DefaultBG>
      <Layout>
        <>
          <CartMain cartItems={items}/>
          <BottomMenu/>
        </>
      </Layout>
    </DefaultBG>
  );
}

export default Cart;