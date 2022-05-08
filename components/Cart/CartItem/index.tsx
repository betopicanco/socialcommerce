import Price from "../../Post/PostMenu/ProdutctArea/Price";
import ProfileInfo from "../../Post/ProfileInfo";
import Title from "../../Post/Title";
import AmountControl from "./AmountControl";
import CartPicture from "./CartPicture";

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
    profile,
    picture,
    title
  } = props;

  return (
    <div className={` py-4 `}>
      <div className={`flex `}>
        <CartPicture pic={picture}/>

        <div className={` pl-2 `}>
          <AmountControl amount={1}/>

          <div className={` mb-auto `}>
            <Price price={'299,99'}/>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <ProfileInfo profile={profile} picSize={30}/>
        <Title>
          {title}
        </Title>
      </div>
    </div>
  );
}

export default CartItem;