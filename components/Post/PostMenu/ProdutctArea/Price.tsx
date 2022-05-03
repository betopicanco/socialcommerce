interface PriceProps {
  price: string
};
const Price = (props: PriceProps) => {
  return (
    <div className={`
      py-1 px-2 mr-1 
      text-xs text-yellow-300/90
      border border-yellow-300/60 rounded-md  
    `}>
      <span className={`
        text-yellow-300/70
      `}>R$ </span>{props.price}
    </div>
  );
};

export default Price;