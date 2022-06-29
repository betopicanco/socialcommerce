import PostInterface from "../Post/interface";
import ShopItem from "./ShopItem";

interface ShopProps {
  products: PostInterface[]
}

const ShopList = (props: ShopProps) => {
  const { products } = props;

  return (
    <main>
      <div className={` 
        md:w-2/3 md:mx-auto md:border-r
        border-neutral-700
        grid grid-cols-2  
      `}>
        {products.map((p: PostInterface) =>  (
          <ShopItem product={p} key={p.id}/>
        ))}
      </div>
    </main>
  );
}

export default ShopList;