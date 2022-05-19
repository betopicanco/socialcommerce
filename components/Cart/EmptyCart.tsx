import Link from "next/link";
import SecondaryButton from "../SecondaryButton";

const EmptyCart = () => {
  return (
    <>
      <p>Carrinho vazio...</p>
      <p>Encontre produtos no </p>
      
      <SecondaryButton>
        <Link href={`/`} passHref>Feed</Link>
      </SecondaryButton>

      <span> ou na </span>

      <SecondaryButton>
        <Link href={'/shop'} passHref>Loja</Link>
      </SecondaryButton>
    </>
  );
}

export default EmptyCart;