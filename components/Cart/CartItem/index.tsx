import Price from "../../Post/PostMenu/ProdutctArea/Price";
import ProfileInfo from "../../Post/ProfileInfo";
import Title from "../../Post/Title";
import CartPicture from "./CartPicture";
import Trash from "../../Icons/Trash";
import PostInterface from "../../Post/interface";
import PostContext from "../../../Context/PostProvider";

interface CartItemProps {
  item: PostInterface
}

const CartItem = (props: CartItemProps) => {
  const {
    id,
    title
  } = props.item;

  return (
    <PostContext.Provider value={props.item}>
      <div className={` py-4 `}>
        <div className={` flex `}>
          <CartPicture />

          <div className={` w-2/3 `}>
            <div className={` h-full w-full `}>
              <div className={` h-1/2 flex justify-end `}>
                <Trash/>
              </div>
              <div className="h-1/2 flex justify-end">
                <div>
                  <Price/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <ProfileInfo picSize={26}/>

          <Title id={id}>
            {title}
          </Title>
        </div>
      </div>
    </PostContext.Provider>
  );
}

export default CartItem;