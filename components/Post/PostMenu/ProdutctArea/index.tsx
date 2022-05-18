import { useContext, useState } from "react";
import LayoutContext from "../../../../Context/LayoutProvider/context";
import AddShoppingCart from "./AddShoppingCart";
import FinalizePurchase from "./FinalizePurchase";
import Price from "./Price";
import ProductAreaButton from "./ProductAreaButton";

const ProductArea = () => {
  const [inCart, setInCart] = useState<boolean>(false);
  const {notifCounter, setNotifCounter} = useContext(LayoutContext);
  const handleClick = () => {
    setInCart(true);
    setNotifCounter(notifCounter + 1);
  }

  return (
    <div className={`flex`}>
      {!inCart ? (
        <div className={`flex`} onClick={handleClick}>
          <Price price={'299,99'}/>
          
          <AddShoppingCart />
        </div>
      ) : (
        <ProductAreaButton>
          <FinalizePurchase />
        </ProductAreaButton>
      )}
    </div>
  );
};

export default ProductArea;