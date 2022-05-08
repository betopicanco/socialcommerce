import ProfileName from "./ProfileName";
import ProfilePic from "./ProfilePic";

interface ProfileInfoProps {
  profile: {
    pic: string,
    name: string
  },
  picSize: number
};

const ProfileInfo = (props: ProfileInfoProps) => {
  const { pic, name, } = props.profile;
  const { picSize } = props;

  return (
    <div className={`flex`}>
      <ProfilePic pic={pic} size={picSize}/>
      <ProfileName>
        {name}
      </ProfileName>
    </div>
  );
};

export default ProfileInfo