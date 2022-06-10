import { useContext } from "react";
import ProfileContext from "../../../Context/ProfileProvider/context";
import Feed from "../../Feed";

const FeedSection = () => {
  const { feed } = useContext(ProfileContext);

  return (
    <section>
      <Feed feed={feed}/>
    </section>
  );
}

export default FeedSection;