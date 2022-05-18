import CartItem from "./CartItem";
import Continue from "./Continue";
import PostInterface from "../Post/interface";
import { useState } from "react";

interface CartMainProps {
  cartItems: PostInterface[]
}

const CartMain = (props: CartMainProps) => {
  const { cartItems } = props;
  const [total, setTotal] = useState(0);
  
  return (
    <main className="h-screen">
      {typeof cartItems === 'object' ? (
        cartItems.map((item) => (
          <>
            <div className="px-2">
              <CartItem key={item.id} item={item} />
            </div>
  
            <hr className="border-neutral-700"/>
          </>
        ))
      ) : ''}

      <Continue total={498.98}/>
    </main>
  )
}

export default CartMain;