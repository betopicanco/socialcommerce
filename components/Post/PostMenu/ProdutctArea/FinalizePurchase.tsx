import Link from "next/link";

const FinalizePurchase = () => {
  return (
    <Link href={'/cart'} passHref>
      Finalizar Compra
    </Link>
  );
};

export default FinalizePurchase;