import axios from "axios";
import { NextPage } from "next";
import BottomMenu from "../components/BottomMenu";
import DefaultBG from "../components/DefaultBG";
import Layout from "../components/Layout";
import ShopList from "../components/Shop";

export async function getStaticProps() {
  const path = 'https://socialcommerce.vercel.app/api/shop';
  const products = await axios.get(path)

  return {
    props: {
      products: products.data
    }
  }
}

const Shop: NextPage = (props: any) => {
  const { products } = props;

  return (
    <DefaultBG>
      <Layout>
        <>
          <ShopList products={products}/>

          <BottomMenu/>
        </>
      </Layout>
    </DefaultBG>
  );
}

export default Shop;