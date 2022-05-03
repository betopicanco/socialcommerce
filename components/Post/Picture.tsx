import Image from "next/image";

const Picture = (props: {pic: string}) => {
  const { pic } = props;
  return (
    <Image 
      src={pic} alt={pic} layout="responsive"  
      width={100} height={50}
    />
  );
};

export default Picture;