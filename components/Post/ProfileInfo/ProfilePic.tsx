import Image from "next/image";

const ProfilePic = (props: {pic: string}) => {
  const { pic } = props;
  
  return (
    <span>
      <Image
        src={pic}
        alt={pic}
        width={32}
        height={33}
        className={`rounded-full`}
      />
    </span>
  );
};

export default ProfilePic;