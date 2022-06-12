import { useContext } from "react";
import ProfileContext from "../../../Context/ProfileProvider/context";
import ShopList from "../../Shop";

const ShopSection = () => {
  const { shop } = useContext(ProfileContext);

  return (
    <ShopList products={shop}/>
  );
}

export default ShopSection;