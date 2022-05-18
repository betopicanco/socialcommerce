import Image from "next/image";
import { useContext } from "react";
import PostContext from "../../../Context/PostProvider";

const CartPicture = () => {
  const { picture } = useContext(PostContext);

  return (
    <div className='w-2/5'>
      <Image 
        src={picture}
        alt={picture}
        layout={'responsive'}
        width={100}
        height={60}
        priority
      />
    </div>
  );
}

export default CartPicture;