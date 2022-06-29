import Link from "next/link";
import SecondaryButton from "../SecondaryButton";

const EmptyCart = () => {
  return (
    <div className="text-center">
      <p>Carrinho vazio...</p>
      <p>Encontre produtos no </p>
      
      <SecondaryButton>
        <Link href={`/`} passHref>Feed</Link>
      </SecondaryButton>

      <span> ou na </span>

      <SecondaryButton>
        <Link href={'/shop'} passHref>Loja</Link>
      </SecondaryButton>
    </div>
  );
}

export default EmptyCart;