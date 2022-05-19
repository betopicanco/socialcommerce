import BottomMenu from "../../components/BottomMenu";
import CartMain from "../../components/Cart";
import DefaultBG from "../../components/DefaultBG";
import Layout from "../../components/Layout";

const Cart = () => {
  return (
    <DefaultBG>
      <Layout>
        <>
          <CartMain/>
          <BottomMenu/>
        </>
      </Layout>
    </DefaultBG>
  );
}

export default Cart;