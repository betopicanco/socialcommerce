import PostInterface from "../Post/interface";
import PostContext from "../../Context/PostProvider";
import ProfileInfo from "../Post/ProfileInfo";
import Picture from "../Post/Picture";
import Title from "../Post/Title";
import Price from "../Post/PostMenu/ProdutctArea/Price";
import ShoppingCartPlus from "../Icons/ShoppingCartPlus";

interface ShopItem {
  key: number,
  product: PostInterface
}

const ShopItem = (props: ShopItem) => {
  const { product } = props;
  const {
    id,
    picture,
    title
  } = product

  return (
    <div className="border-l border-b border-neutral-700">
      <PostContext.Provider value={product}>
        <div className={`p-1 pt-2`}>
          <ProfileInfo picSize={30}/>
        </div>

        <Picture pic={picture}/>

        <div className={`p-2 pb-4`}>
          <Title id={id}>
            {title}
          </Title>
        </div>
        
        <div className={` flex justify-between p-1`}>
          <div className={`p-1`}>
            <Price price="199,00"/>
          </div>

          <div className={`p-2`}>
            <ShoppingCartPlus style={` h-5 w-5 fill-yellow-300 `}/>
          </div>
        </div>
      </PostContext.Provider>
    </div>
  );
}

export default ShopItem;