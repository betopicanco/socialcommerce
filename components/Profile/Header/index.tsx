import { useContext } from "react";
import ProfileContext from "../../../Context/ProfileProvider/context";
import ProfilePic from "../../Post/ProfileInfo/ProfilePic";
import Action from "./Action";
import Stats from "./Stats";

const ProfileHeader = () => {
  const { profile } = useContext(ProfileContext);
  const { pic, name, bio } = profile;

  return (
    <header className="p-4">
      <div className="flex justify-between">
        <div className="pr-4">
          <ProfilePic pic={pic} size={52}/>
        </div>
        
        <div>
          <Stats value={50} description={'Publicações'}/>
          <Stats value={714} description={'Seguidores'}/>
          <Stats value={130} description={'Assinantes'}/>
        </div>
      </div>

      <div>
        {name}
      </div>
      <p className="text-sm">
        {bio}
      </p>

      <nav className="py-4">
        <ul className="flex justify-between">
          <li className="w-1/4">
            <Action value="Seguir" checked/>
          </li>
          <li className="w-1/4">
            <Action value="Assinar"/>
          </li>
          <li className="w-1/3">
            <Action value="Mensagem"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProfileHeader;