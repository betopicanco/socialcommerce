import { useState } from "react";
import theme from "./theme";

import CommentArea from "./CommentArea/CommentArea";
import PostMenu from "./PostMenu";
import Date from "./Date";
import Title from "./Title";
import Picture from "./Picture";
import ProfileInfo from "./ProfileInfo";
import ThemeContext from "./ThemeContext";

interface PostProps {
    key:number,
    profile: {
      pic: string,
      name: string
    },
    date: string,
    picture: string,
    title: string,
    liked: boolean,
    isProduct: boolean
}

const Post = (props: PostProps) => {
    const [liked, setLiked] = useState<boolean>(props.liked ?? false);
    const [comment, setComment] = useState<boolean>(false);
    const [priceVisible, setPriceVisible] = useState<boolean>(false);
    const [inCart, setInCart] = useState<boolean>(false);
    const {
      title,
      date,
      picture,
      profile
    } = props;

    return (
      <div className={`
        pt-4 border-b border-neutral-600
      `}>
        <div className={`flex justify-between px-4`}>
          <ProfileInfo profile={profile} picSize={32}/>

          <Date>
            {date}
          </Date>
        </div>

        <div className={`my-2 x-0`} onClick={() => setPriceVisible(true)} >
          <Picture pic={picture}/>
        </div>

        <div className={`px-4 pb-4`}>
          <PostMenu 
            liked={liked} 
            comment={comment} 
            setLiked={setLiked} 
            setComment={setComment}
            isProduct={props.isProduct}
            priceVisible={priceVisible}
            inCart={inCart}
          />

          <Title>
            {title}
          </Title>
        </div>

        {comment ? ( <CommentArea/> ) : ''}
      </div>
    );
};

export default Post;