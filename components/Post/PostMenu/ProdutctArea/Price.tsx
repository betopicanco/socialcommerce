import { useContext } from "react";
import PostContext from "../../../../Context/PostProvider";
import SecondaryButton from "../../../SecondaryButton";

const Price = () => {
  const { price } = useContext(PostContext);
  
  return (
    <SecondaryButton>
      <button>
        <span className={`
        text-yellow-300/70
        `}>R$ </span>{price}
      </button>
    </SecondaryButton>
  );
}

export default Price;