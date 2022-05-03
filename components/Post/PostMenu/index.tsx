import ProductArea from "./ProdutctArea";
import Like from "./Like";
import FinalizePurchase from "./ProdutctArea/FinalizePurchase";
import ShowCommentArea from "./ShowCommentArea";
import SharePost from "./SharePost";

interface PostMenuProps {
    liked: boolean,
    comment: boolean,
    setLiked: (value:boolean) => void,
    setComment: (value:boolean) => void,
    isProduct?: boolean | false,
    priceVisible: boolean,
    inCart: boolean,
};

const PostMenu = (props: PostMenuProps) => {
  const liked: boolean = props.liked ?? false;

  return (
      <div className={`w-full flex justify-between my-2`}>
        <div className={`flex`}>
          <Like
            liked={liked} 
            setLiked={props.setLiked}
          />

          <ShowCommentArea
            onClick={() => props.setComment?.(!props.comment)}
          />

          <SharePost />
        </div>
          
        {props.isProduct && (
          props.priceVisible && (
            props.inCart ? (
              <FinalizePurchase />
            ) : (
              <div className={`flex`}>
                <ProductArea />
              </div>
            )
          )
        )}
      </div>
  );
};

export default PostMenu; 