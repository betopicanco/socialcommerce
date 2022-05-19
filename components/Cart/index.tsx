import CartItem from "./CartItem";
import Continue from "./Continue";
import PostInterface from "../Post/interface";
import { useEffect, useState } from "react";
import Link from "next/link";
import ModestWarning from "../ModestWarning";
import SecondaryButton from "../SecondaryButton";

interface CartMainProps {
  cartItems?: PostInterface[]
}

const CartMain = (props: CartMainProps) => {
  const { cartItems } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(cartItems){
      cartItems.map((item) => setTotal(total + (item.price ?? 0)))
    } 
  }, []);
  
  return (
    <main className="h-screen">
      {cartItems ? (
        cartItems.map((item: PostInterface) => {
          return (
            <>
              <div className="px-2">
                <CartItem key={item.id} item={item} />
              </div>
    
              <hr className="border-neutral-700"/>
            </>
          )
        })
      ) : (
        <ModestWarning>
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
        </ModestWarning>
      )}

      <Continue total={total}/>
    </main>
  )
}

export default CartMain;