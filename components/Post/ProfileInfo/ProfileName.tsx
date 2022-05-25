const ProfileName = (props: {children: string}) => {
  const { children } = props;
  
  return (
    <span className={`
      text-white pl-2 
      leading-7 text-sm
      align-middle
    `}>
      { children }
    </span>
  );
}

export default ProfileName;