import { useState } from "react";
import AddShoppingCart from "./AddShoppingCart";
import FinalizePurchase from "./FinalizePurchase";
import Price from "./Price";
import ProductAreaButton from "./ProductAreaButton";

const ProductArea = () => {
  const [inCart, setInCart] = useState<boolean>(false);
  const handleClick = () => {
    setInCart(true);
  }

  return (
    <>
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
    </>
  );
};

export default ProductArea;