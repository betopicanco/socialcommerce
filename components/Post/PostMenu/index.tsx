import ProductArea from "./ProdutctArea";
import Like from "./Like";
import FinalizePurchase from "./ProdutctArea/FinalizePurchase";
import ShowCommentArea from "./ShowCommentArea";
import SharePost from "./SharePost";

interface PostMenuProps {
  showComment: boolean,
  setShowComment: (value:boolean) => void,
  isProduct?: boolean | false,
  priceVisible: boolean,
  inCart: boolean,
};

const PostMenu = (props: PostMenuProps) => {
  
  return (
      <div className={`w-full flex justify-between my-2`}>
        <div className={`flex`}>
          <Like />

          <ShowCommentArea
            onClick={() => props.setShowComment?.(!props.showComment)}
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