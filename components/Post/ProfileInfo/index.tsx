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
<<<<<<< HEAD:components/Profile/ProfileInfo/index.tsx
    <Link href={`/profile/${profile}`} passHref>
      <div className={`flex`}>
        {/* <ProfilePic pic={profile.pic} size={picSize}/>
        <ProfileName name={profile.name}/> */}link
      </div>
    </Link>
=======
    <div className={`flex`}>
      <ProfilePic pic={profile.pic} size={picSize}/>
      <ProfileName>
        {profile.name}
      </ProfileName>
    </div>
>>>>>>> parent of 4a8165a (Upload api/profile 2 and 3):components/Post/ProfileInfo/index.tsx
  );
};

export default ProfileInfo