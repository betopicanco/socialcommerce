import { useContext } from "react";
import ProfileContext from "../../../Context/ProfileProvider/context";
import ProfilePic from "../../Post/ProfileInfo/ProfilePic";
import Action from "./Action";
import Stats from "./Stats";

const ProfileHeader = () => {
  const { profile } = useContext(ProfileContext);
  const { pic, name, bio } = profile;

  return (
    <header>
      <ProfilePic pic={pic} size={32}/>
      <strong>
        {name}
      </strong>
      <p>
        {bio}
      </p>
      
      <div>
        <Stats value={50} description={'Publicações'}/>
        <Stats value={714} description={'Seguidores'}/>
        <Stats value={130} description={'Assinantes'}/>
      </div>

      <nav>
        <ul>
          <li>
            <Action value="Seguir" checked/>
          </li>
          <li>
            <Action value="Assinar"/>
          </li>
          <li>
            <Action value="Mensagem"/>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProfileHeader;