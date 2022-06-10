import axios from 'axios';
import type { NextPage } from 'next';

import BottomMenu from '../components/BottomMenu';
import DefaultBG from '../components/DefaultBG';
import Feed from '../components/Feed';
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
  const { feed } = props;

  return (
    <DefaultBG>
      <Layout>
        <div className='mt-12 sm:mt-20'>
          <Feed feed={feed}/>
          <BottomMenu/>
        </div>
      </Layout>
    </DefaultBG>
  );
}

export default Home;