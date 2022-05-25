const ThirdButton = (props: {text: string}) => {
  return (
    <strong className={`
    text-white px-4 py-2 rounded-md
    bg-indigo-700/50
    `}>
      {props.text}
    </strong>
  );
}

export default ThirdButton;