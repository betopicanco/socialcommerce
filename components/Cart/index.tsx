import CartItem from "./CartItem";
import Continue from "./Continue";
import PostInterface from "../Post/interface";
import { useEffect, useState } from "react";
import ModestWarning from "../ModestWarning";
import EmptyCart from "./EmptyCart";

interface CartMainProps {
  cartItems?: PostInterface[]
}

const CartMain = (props: CartMainProps) => {
  const { cartItems } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(199)
  })
  
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
          <EmptyCart/>
        </ModestWarning>
      )}

      <Continue total={total}/>
    </main>
  )
}

export default CartMain;