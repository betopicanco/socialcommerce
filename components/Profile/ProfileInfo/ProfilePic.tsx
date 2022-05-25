import Image from "next/image";

const ProfilePic = (props: {pic: string, size: number}) => {
  const { pic, size } = props;
  
  return (
    <span className={"align-middle"}>
      <Image
        src={pic}
        alt={pic}
        width={size}
        height={size}
        className={`rounded-full`}
      />
    </span>
  );
};

export default ProfilePic;