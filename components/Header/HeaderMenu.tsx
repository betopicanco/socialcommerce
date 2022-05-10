import { useContext } from "react";
import LayoutContext from "../../Context/LayoutProvider/context";
import MenuItem from "./MenuItem"

const HeaderMenu = () => {
  const { menuItems } = useContext(LayoutContext);
  const styles = {
    nav: `
      flex fixed right-0 z-40 w-1/2 
      bg-neutral-700/70 rounded-b-lg 
      border-b border-l border-r border-violet-400
    `
  }

  return (
    <nav className={styles.nav}>
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