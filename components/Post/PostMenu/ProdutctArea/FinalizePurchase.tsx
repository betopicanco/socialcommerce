import Link from "next/link";
import { useContext } from "react";
import LayoutContext from "../../../../Context/LayoutProvider/context";

const FinalizePurchase = () => {
  const { cartItems } = useContext(LayoutContext);
  const path = `https://socialcommerce.vercel.app/cart${cartItems}`;

  return (
    <Link href={path} passHref>
      Finalizar Compra
    </Link>
  );
};

export default FinalizePurchase;