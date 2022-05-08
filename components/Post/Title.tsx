const Title = (props: {children: string}) => {
  const { children } = props;

  return (
    <p className={`
      text-xs 
      text-white
      leading-2
      sm:text-base
    `}>
      {children}
    </p>
  );
};

export default Title;