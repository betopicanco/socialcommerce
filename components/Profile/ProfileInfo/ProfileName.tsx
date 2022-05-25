const ProfileName = (props: {name: string}) => {
  const { name } = props;
  
  return (
    <span className={`
      text-white pl-2 
      leading-7 text-sm
      align-middle
    `}>
      { name }
    </span>
  );
}

export default ProfileName;