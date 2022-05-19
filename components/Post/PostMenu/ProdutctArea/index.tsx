import { useContext, useState } from "react";
import LayoutContext from "../../../../Context/LayoutProvider/context";
import PostContext from "../../../../Context/PostProvider";
import SecondaryButton from "../../../SecondaryButton";
import AddShoppingCart from "./AddShoppingCart";
import FinalizePurchase from "./FinalizePurchase";
import Price from "./Price";

const ProductArea = () => {
  const [inCart, setInCart] = useState<boolean>(false);
  const { 
    notifCounter,
    setNotifCounter,
    cartItems, 
    setCartItems
  } = useContext(LayoutContext);
  const { id } = useContext(PostContext);

  const handleClick = () => {
    setInCart(true);
    setNotifCounter(notifCounter + 1);
    setCartItems(cartItems + '/' + id)
  }

  return (
    <div className={`flex`}>
      {!inCart ? (
        <div className={`flex`} onClick={handleClick}>
          <Price />
          
          <AddShoppingCart />
        </div>
      ) : (
        <SecondaryButton>
          <FinalizePurchase />
        </SecondaryButton>
      )}
    </div>
  );
};

export default ProductArea;