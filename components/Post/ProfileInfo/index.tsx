import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

interface ProfileInfoProps {
  profile: {
    pic: string,
    name: string
  }
};

const ProfileInfo = (props: ProfileInfoProps) => {
  const { pic, name } = props.profile;

  return (
    <div className={`flex`}>
      <ProfilePic pic={pic}/>
      <ProfileName children={name}/>
    </div>
  );
};

export default ProfileInfo