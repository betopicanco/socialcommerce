import { useContext } from "react";
import PostContext from "../../../../Context/PostProvider";
import ProductAreaButton from "./ProductAreaButton"

interface PriceProps {
  price: string
}

const Price = (props: any) => {
  const { price } = useContext(PostContext);
  
  return (
    <ProductAreaButton>
      <button>
        <span className={`
        text-yellow-300/70
        `}>R$ </span>{price}
      </button>
    </ProductAreaButton>
  );
}

export default Price;