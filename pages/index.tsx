import type { NextPage } from 'next'
import BottomMenu from '../components/BottomMenu'

import Feed from '../components/Feed'
import Layout from '../components/Layout'

const Home: NextPage = () => {
    const menuItems = [
        {href: '/test', title: 'teste'},
        {href: '/login', title: 'login'}
    ];

    return (
        <div className={`bg-neutral-800`}>
            <Layout menuItems={menuItems}>
                <Feed />
                <BottomMenu/>
            </Layout>
        </div>
    )
}

export default Home;