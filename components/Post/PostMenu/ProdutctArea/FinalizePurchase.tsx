import Link from "next/link";
import { useContext } from "react";
import LayoutContext from "../../../../Context/LayoutProvider/context";

const FinalizePurchase = () => {
  const { cartItems } = useContext(LayoutContext);

  return (
    <Link href={`cart${cartItems}`} passHref>
      Finalizar Compra
    </Link>
  );
};

export default FinalizePurchase;