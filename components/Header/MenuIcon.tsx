import { useContext } from "react";
import MenuHamburguer from "../Icons/MenuHamburger";
import LayoutContext from "../../Context/LayoutProvider/context";
import NotificationCounter from "../NotificationCounter";

const MenuIcon = () => {
  const { 
    visibleMenu, 
    setVisibleMenu,
    notifCounter 
  } = useContext(LayoutContext);

  return (
    <div className={`
      p-1 rounded-md bg-violet-400/30 
      cursor-pointer drop-shadow-md
    `}
      onClick={() => setVisibleMenu(!visibleMenu)}>
      <MenuHamburguer />
      <NotificationCounter counter={notifCounter}/>
    </div>
  );
}

export default MenuIcon;