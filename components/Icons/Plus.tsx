import { IconProps } from "./interface/IconProps";

interface PlusProps extends IconProps {
  onClick?: any
}

const Plus = (props: PlusProps) => {
  const { style } = props;

  return (
    <div onClick={() => props.onClick()}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={style}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
  );
}

export default Plus;