import Link from "next/link";
import { useContext, useEffect } from "react";
import PostContext from "../../../Context/PostProvider";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

interface ProfileInfoProps {
  picSize: number
};

const ProfileInfo = (props: ProfileInfoProps) => {
  const { picSize } = props;
  const { profile } = useContext(PostContext);
  useEffect(() => {
    
  }, []);

  return (
    <Link href={`/profile/${profile}`} passHref>
      <div className={`flex`}>
        {/* <ProfilePic pic={profile.pic} size={picSize}/>
        <ProfileName name={profile.name}/> */}link
      </div>
    </Link>
  );
};

export default ProfileInfo