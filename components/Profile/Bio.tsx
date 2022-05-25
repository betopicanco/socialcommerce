import ProfileInterface from "../../pages/api/profile/interface";
import ProfileName from "./ProfileInfo/ProfileName";
import ProfilePic from "./ProfileInfo/ProfilePic";
import Statics from "./Statics";

interface BioProps {
  profile: ProfileInterface
}

const Bio = (props: BioProps) => {
  const {profile} = props;
  return (
    <section className={`p-4`}>
      <div className={`flex`}>
        <div>
          <ProfilePic pic={profile.pic} size={55}/>
        </div>
        <div className={``}>
        <Statics posts={20} followers={3062} subscribers={234}/>
        </div>
      </div>
      <div>
        {profile.name}
      </div>
      
    </section>
  );
}

export default Bio;