import PostInterface from "../Post/interface";
import PostContext from "../../Context/PostProvider";
import ProfileInfo from "../Post/ProfileInfo";
import Picture from "../Post/Picture";
import Title from "../Post/Title";
import Price from "../Post/PostMenu/ProdutctArea/Price";
import ShoppingCartPlus from "../Icons/ShoppingCartPlus";
import { useContext, useState } from "react";
import LayoutContext from "../../Context/LayoutProvider/context";
import SecondaryButton from "../SecondaryButton";
import Link from "next/link";
import FinalizePurchase from "../Post/PostMenu/ProdutctArea/FinalizePurchase";

interface ShopItem {
  key: number,
  product: PostInterface
}

const ShopItem = (props: ShopItem) => {
  const { product } = props;
  const {
    id,
    picture,
    title
  } = product;

  const {
    notifCounter,
    setNotifCounter,
    cartItems,
    setCartItems,
  } = useContext(LayoutContext);

  const [inCart, setInCart] = useState(false);

  const handleClick = () => {
    setNotifCounter(notifCounter + 1);
    setCartItems(cartItems + '/' + id);
    setInCart(true)
  }

  return (
    <div className="border-l border-b border-neutral-700">
      <PostContext.Provider value={product}>
        <div className={`p-1 pt-2`}>
          <ProfileInfo picSize={30}/>
        </div>

        <Picture pic={picture}/>

        <div className={`p-2 pb-4`}>
          <Title id={id}>
            {title}
          </Title>
        </div>
        
        {!inCart ? (
          <div className={`flex justify-between p-1`}>
            <div className={`p-1`}>
              <Price/>
            </div>

            <div 
              className={`p-2 rounded-full active:bg-neutral-700`}
              onClick={handleClick}>
              <ShoppingCartPlus style={` h-5 w-5 fill-yellow-300 `}/>
            </div>
          </div>
        ) : (
          <div className={`w-full flex justify-center mb-2`}>
            <SecondaryButton>
              <FinalizePurchase />
            </SecondaryButton>
          </div>
        )}
      </PostContext.Provider>
    </div>
  );
}

export default ShopItem;