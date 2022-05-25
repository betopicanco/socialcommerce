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
    let value = 0;
    cartItems?.map((item) => {
      if(item.price !== null) value += item.price;
    })
    setTotal(value);
  }, [])
 
  return (
    <main className="h-screen" >
      {cartItems ? (
        cartItems.map((item: PostInterface) => {
          return (
            <div key={item.id}>
              <div className="px-2">
                <CartItem item={item} />
              </div>
    
              <hr className="border-neutral-700"/>
            </div>
          )
        })
        
      ) : (
        <ModestWarning>
          <EmptyCart/>
        </ModestWarning>
      )}

      {cartItems ? <Continue total={total}/> : ''}
    </main>
  )
}

export default CartMain;