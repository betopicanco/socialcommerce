const SecondaryButton = (props: {children: JSX.Element}) => {
  const { children } = props;

  return (
    <span className={`
      py-1 px-2 mr-1 
      bg-neutral-700/30
      text-xs text-yellow-300/90
      border border-yellow-300/60 rounded-md  
    `}>
      {children}
    </span>
  );
}

export default SecondaryButton;