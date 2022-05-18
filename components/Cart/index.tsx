import CartItem from "./CartItem";
import Continue from "./Continue";
import PostContext from "../../Context/PostProvider";
import PostInterface from "../Post/interface";

interface CartMainProps {
  cartItems: PostInterface[]
}

const CartMain = (props: CartMainProps) => {
  const { cartItems } = props;
  
  return (
    <main className="h-screen">
      {typeof cartItems === 'object' ? (
        cartItems.forEach((item) => {
          <p>{item.id}</p>
        })
        // cartItems.map((item) => (
        //   <>
        //     <div className="px-2">
        //       <CartItem 
        //         id={item.id}
        //         profile={item.profile}
        //         date={item.date}
        //         picture={item.picture}
        //         title={item.title}
        //       />
        //     </div>
  
        //     <hr className="border-neutral-700"/>
        //   </>
        // ))
      ) : ''}

      <Continue total={498.98}/>
    </main>
  )
}

export default CartMain;