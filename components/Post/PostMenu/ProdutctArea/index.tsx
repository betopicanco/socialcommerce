import AddShoppingCart from "./AddShoppingCart";
import Price from "./Price";

const ProductArea = () => {
  return (
    <div className={`flex`}>
      <Price price={'299,99'}/>
      <AddShoppingCart />
    </div>
  );
};

export default ProductArea;