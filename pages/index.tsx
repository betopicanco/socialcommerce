import axios from 'axios';
import type { NextPage } from 'next';

import BottomMenu from '../components/BottomMenu';
import Feed from '../components/Feed';
import LoginIcon from '../components/Icons/Login';
import Mail from '../components/Icons/Mail';
import ShoppingCart from '../components/Icons/ShoppingCart';
import Layout from '../components/Layout';

export async function getStaticProps() {
  const path = 'https://socialcommerce.vercel.app/api/posts/';
  const props = await axios.get(path);

  return {
    props: {
      feed: props.data
    }
  }
}

const Home: NextPage = (props: any) => {
  const cart = <ShoppingCart style={` fill-yellow-300 h-4 w-4 `}/>
  const mail = <Mail style={` stroke-yellow-300 h-4 w-4 `}/>
  const login = <LoginIcon style={` stroke-yellow-300 h-4 w-4 `}/>

  const menuItems = [
      {href: '/login', title: 'login', icon: login},
      {href: '/teste', title: 'chat', icon: mail},
      {href: '/cart', title: 'compras', icon: cart}
  ];

  const { feed } = props;

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