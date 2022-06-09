import { useContext } from "react";
import ProfileContext from "../../Context/ProfileProvider/context";
import ExclusiveSection from "./Section/ExclusiveSection";
import FeedSection from "./Section/FeedSection";
import ShopSection from "./Section/ShopSection";

const Switch = () => {
  const { currentSection } = useContext(ProfileContext);
  let section;

  switch (currentSection) {
    case 'feed':
      section = <FeedSection/>;
      break;
  
    case 'shop':
      section = <ShopSection/>;
      break;

    case 'exclusive':
      section = <ExclusiveSection/>;
      break;

    default:
      section = (
        <section>
          <span>Sessão não encontrada</span>
        </section>
      );
      break;
  }

  return section;
}

export default Switch;