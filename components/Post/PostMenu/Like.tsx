import { useContext, useState } from "react";

import PostContext from "../../../Context/PostProvider";
import HeartFill from "../../Icons/HeartFill";
import HeartStroke from "../../Icons/HeartStroke";

const Heart = () => {
    const { liked } = useContext(PostContext);
    const [like, setLike] = useState(liked);

    return (
      <div className={`h-6 w-6 mr-2 active:bg-purple-300/30 rounded-full`} onClick={() => setLike(!like)}>
        {like ? (
          <HeartFill />
        ) : (
          <HeartStroke />
        )}
      </div>
    )
}

export default Heart;