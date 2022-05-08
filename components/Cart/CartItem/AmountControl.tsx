import ChevronDown from "../../Icons/ChevronDown";
import ChevronUp from "../../Icons/ChevronUp";

const AmountControl = (props: { amount:number }) => {
  const { amount } = props;
  return (
    <div className={`
    text-white 
      border-2 border-purple-600 rounded
      flex mb-2
    `}>
      <div 
        className={`
          px-1 bg-purple-700
        `}>
        <strong 
          className={`
            text-xs align-middle
          `}>
          QTD
        </strong>
      </div>

      <span 
        id="amount" 
        className={` mx-2 align-middle `}>
        {amount}
      </span>

      <div className={`
        bg-purple-700/30 border-l border-purple-700
      `}>
        <ChevronUp/>

        <hr className="border-purple-700"/>

        <ChevronDown/>
      </div>
    </div>
  );
}

export default AmountControl;