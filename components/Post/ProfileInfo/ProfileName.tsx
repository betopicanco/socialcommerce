const ProfileName = (props: {children: string}) => {
  const { children } = props;
  
  return (
    <span className={`
      text-white pl-2 leading-8 text-sm
    `}>
      { children }
    </span>
  );
}

export default ProfileName;