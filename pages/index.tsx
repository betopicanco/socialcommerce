import type { NextPage } from 'next'

import BottomMenu from '../components/BottomMenu'
import Feed from '../components/Feed'
import LoginIcon from '../components/Icons/Login'
import Mail from '../components/Icons/Mail'
import ShoppingCart from '../components/Icons/ShoppingCart'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/teste', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
  ];

  return (
    <div className={`bg-neutral-800`}>
      <Layout menuItems={menuItems}>
        <>
          <Feed />
          <BottomMenu/>
        </>
      </Layout>
    </div>
  );
}

export default Home;