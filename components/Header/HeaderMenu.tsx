import { useContext } from "react";
import LayoutContext from "../../Context/LayoutProvider/context";
import MenuItem from "./MenuItem"

const HeaderMenu = () => {
  const { menuItems } = useContext(LayoutContext);

  return (
    <nav 
      className={`
        flex fixed right-0 z-40 
        w-2/5 md:w-1/6
        bg-neutral-700/70 rounded-b-lg 
        border-b border-l border-r border-violet-400
        backdrop-blur-sm
      `}>
      <ul className={`mx-auto w-full`}>
        {menuItems.map((menuItem: any, i:number) => {
          return (
            <MenuItem 
              href={menuItem.href} 
              title={menuItem.title} 
              icon={menuItem.icon}
              key={i}/>
          );
        })}
      </ul>
    </nav>
  );
}

export default HeaderMenu;