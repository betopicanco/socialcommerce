import { useState } from "react";

import CommentArea from "./CommentArea/CommentArea";
import PostMenu from "./PostMenu";
import Date from "./Date";
import Title from "./Title";
import Picture from "./Picture";
import ProfileInfo from "./ProfileInfo";
import PostInterface from "./interface";
import PostContext from "../../Context/PostProvider";
import Content from "./Content";

interface PostProps {
  key: number,
  data: PostInterface
}

const Post = (props: PostProps) => {
  const [showComment, setShowComment] = useState<boolean>(false);
  const [priceVisible, setPriceVisible] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [inCart, setInCart] = useState<boolean>(false);
  const {
    id,
    title,
    date,
    picture,
    isProduct
  } = props.data;

  return (
    <PostContext.Provider value={props.data}>
      <div className={`
        pt-4 border-b border-neutral-600
      `}>
        <div className={`flex justify-between px-4`}>
          <ProfileInfo picSize={32}/>

          <Date>
            {date}
          </Date>
        </div>

        <div className={` my-2 `} onClick={() => setPriceVisible(true)} >
          <Picture pic={picture}/>
        </div>

        <div className={` px-4 pb-4 `}>
          <PostMenu 
            showComment={showComment} 
            setShowComment={setShowComment}
            showInfo={showInfo}
            setShowInfo={setShowInfo}
            isProduct={isProduct}
            inCart={inCart}
          />

          <Title id={id}>
            {title}
          </Title>

          {showInfo && (
            <Content/>
          )}
        </div>

        {showComment ? ( <CommentArea/> ) : ''}
      </div>
    </PostContext.Provider>
  );
};

export default Post;