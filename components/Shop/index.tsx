import PostInterface from "../Post/interface";
import ShopItem from "./ShopItem";

interface ShopProps {
  products: PostInterface[]
}

const ShopList = (props: ShopProps) => {
  const { products } = props;

  return (
    <main>
      <div className={` grid grid-cols-2 `}>
        {products.map((p: PostInterface) =>  (
          <ShopItem product={p} key={p.id}/>
        ))}
      </div>
    </main>
  );
}

export default ShopList;