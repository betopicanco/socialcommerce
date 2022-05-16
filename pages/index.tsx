import type { NextPage } from 'next';
import useSWR from 'swr';

import BottomMenu from '../components/BottomMenu';
import Feed from '../components/Feed';
import LoginIcon from '../components/Icons/Login';
import Mail from '../components/Icons/Mail';
import ShoppingCart from '../components/Icons/ShoppingCart';
import Layout from '../components/Layout';

const fetcher = (url:string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/teste', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
  ];

  const path = '/api/posts';
  const { data: feed, error } = useSWR(path, fetcher);

  if(!feed) {
    return (
      <div>
        <h2>Carregando...</h2>
      </div>
    )
  }

  return (
    <div className={`bg-neutral-800`}>
      <Layout menuItems={menuItems}>
        <>
          <Feed feed={feed}/>
          <BottomMenu/>
        </>
      </Layout>
    </div>
  );
}

export default Home;