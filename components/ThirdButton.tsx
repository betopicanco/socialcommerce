const ThirdButton = (props: {text: string}) => {
  return (
    <strong className={`
    text-white p-2 rounded-md
    bg-blue-700/70
    `}>
      {props.text}
    </strong>
  );
}

export default ThirdButton;