import ProductArea from "./ProdutctArea";
import Like from "./Like";
import FinalizePurchase from "./ProdutctArea/FinalizePurchase";
import ShowCommentArea from "./ShowCommentArea";
import SharePost from "./SharePost";
import Plus from "../../Icons/Plus";

interface PostMenuProps {
  showComment: boolean,
  setShowComment: (value:boolean) => void,
  showInfo: boolean,
  setShowInfo: (value: boolean) => void
  isProduct?: boolean | false,
  inCart: boolean,
};

const PostMenu = (props: PostMenuProps) => {
  const { 
    isProduct, 
    inCart, 
    showInfo, 
    setShowInfo 
  } = props;

  return (
      <div className={`w-full flex justify-between my-2`}>
        <div className={`flex`}>
          <Like />

          <ShowCommentArea
            onClick={() => props.setShowComment?.(!props.showComment)}
          />

          <SharePost />
        </div>

        <div>
          {showInfo ? 
            isProduct && (
              inCart ? (
                <FinalizePurchase />
              ) : (
                <ProductArea />
              )
            )
          : (
            <div>
              <Plus
                onClick={() => setShowInfo(true)}
                style={` 
                  h-6 w-6 
                  stroke-yellow-300 
                  rounded-full 
                  active:bg-neutral-700 
                `}/>
            </div>
          )}
        </div>
          
      </div>
  );
};

export default PostMenu; 