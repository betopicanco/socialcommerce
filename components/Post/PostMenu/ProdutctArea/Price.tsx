import ProductAreaButton from "./ProductAreaButton"

interface PriceProps {
  price: string
}

const Price = (props: PriceProps) => {
  return (
    <ProductAreaButton>
      <button>
        <span className={`
        text-yellow-300/70
        `}>R$ </span>{props.price}
      </button>
    </ProductAreaButton>
  );
}

export default Price;