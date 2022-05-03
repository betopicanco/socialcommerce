const Date = (props: {children: string}) => {
  const { children } = props;

  return (
    <span className={`
      inline-flex py-2 
      text-xs text-neutral-400
    `}>
      {children}
    </span>
  );
};

export default Date;