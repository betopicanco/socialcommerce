import { useContext } from "react";
import PostContext from "../../../Context/PostProvider";
import Statics from "../Statics";
import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

interface ProfileInfoProps {
  picSize: number
};

const ProfileInfo = (props: ProfileInfoProps) => {
  const { picSize } = props;
  const { profile } = useContext(PostContext);

  return (
    <div className={`flex`}>
      <ProfilePic pic={profile.pic} size={picSize}/>
      <ProfileName name={profile.name}/>
    </div>
  );
};

export default ProfileInfo