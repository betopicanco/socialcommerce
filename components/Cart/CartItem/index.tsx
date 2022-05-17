import Price from "../../Post/PostMenu/ProdutctArea/Price";
import ProfileInfo from "../../Post/ProfileInfo";
import Title from "../../Post/Title";
import CartPicture from "./CartPicture";
import Trash from "../../Icons/Trash";

interface CartItemProps {
  id: number,
  profile: {
    pic: string,
    name: string
  },
  date: string,
  picture: string,
  title: string,
}

const CartItem = (props: CartItemProps) => {
  const {
    id,
    picture,
    title
  } = props;

  return (
    <div className={` py-4 `}>
      <div className={` flex `}>
        <CartPicture pic={picture}/>

        <div className={` 
          flex justify-between 
          w-2/3 pl-2 
        `}>
          <div>
            <ProfileInfo picSize={30}/>
          </div>
          <div className={``}>
            <div className={`mb-4 pl-12`}>
              <Trash/>
            </div>
            <Price price={'299,99'}/>
          </div>
        </div>
      </div>

      <div className="pt-2">
        
        <Title id={id}>
          {title}
        </Title>
      </div>
    </div>
  );
}

export default CartItem;