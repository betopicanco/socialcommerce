import { useState } from "react"
import Header from "./Header/Header"
import HeaderMenu from "./Header/HeaderMenu"
import LayoutContext from "../Context/LayoutProvider/context";
import ShoppingCart from "./Icons/ShoppingCart";
import Mail from "./Icons/Mail";
import LoginIcon from "./Icons/Login";

interface LayoutProps {
    children:JSX.Element
}

const Layout = (props: LayoutProps) => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>;
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>;
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>;

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/test', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
  ];
  const { children } = props;
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