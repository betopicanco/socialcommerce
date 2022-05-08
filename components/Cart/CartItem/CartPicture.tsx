import Image from "next/image";

const CartPicture = (props: {pic: string}) => {
  const { pic } = props;
  return (
    <div className={`
      w-2/3
    `}>
      <Image 
        src={pic}
        alt={pic}
        layout={'responsive'}
        width={100}
        height={60}
      />
    </div>
  );
}

export default CartPicture;