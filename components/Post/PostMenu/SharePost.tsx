import { useContext } from "react";
import PostContext from "../../../Context/PostProvider";
import Share from "../../Icons/Share";


const SharePost = () => {
  const { id, title } = useContext(PostContext);
  const share = () => {
    if(navigator.share !== undefined) {
      navigator.share({
        title: 'Social Commerce',
        text: title,
        url: `https://socialcommerce.vercel.app/post/${id}`
      }).catch((error) => console.log('Error sharing', error));
    }
  }

  return (
    <div className={` active:bg-purple-300/30 rounded-full mr-2`} onClick={() => share()}>
      <Share />
    </div>
  )
};

export default SharePost; 