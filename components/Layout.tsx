import { useState } from "react"
import Header from "./Header/Header"
import HeaderMenu from "./Header/HeaderMenu"
import LayoutContext from "../Context/LayoutProvider/context";

interface LayoutProps {
    menuItems: {
      href:string,
      title:string,
      icon?: JSX.Element
    }[],
    children:JSX.Element
}

const Layout = (props: LayoutProps) => {
  const { menuItems, children } = props;
  const [ visibleMenu, setVisibleMenu ] = useState(false);
  const [ notifCounter, setNotifCounter ] = useState(0);
  const [ cartItems , setCartItems ] = useState('');

  return (
    <LayoutContext.Provider 
      value={{
        visibleMenu, 
        setVisibleMenu,
        notifCounter,
        setNotifCounter,
        menuItems,
        cartItems,
        setCartItems
      }}>
      <>
        <Header />

        {visibleMenu ? (
          <HeaderMenu />
        ) : ''}

        <div className={`mt-12 sm:mt-20`}>
          {children}
        </div>
      </>
    </LayoutContext.Provider>
  );
}

export default Layout;