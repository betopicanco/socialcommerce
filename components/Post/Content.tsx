import { useContext } from "react";
import PostContext from "../../Context/PostProvider";

const Content = () => {
  const {content: postContent} = useContext(PostContext);

  return (
    <p className={`pt-4 text-xs`}>
      {postContent}
    </p>
  );
}

export default Content;