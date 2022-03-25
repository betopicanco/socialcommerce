import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Layout from '../components/Layout'

const Home: NextPage = () => {
    const menuItems = {
        href: '/test',
        title: 'teste'
    }

    return (
        <div className={`bg-neutral-800`}>
            <Layout menuItems={menuItems}>
                <Feed />
            </Layout>
        </div>
    )
}

export default Home
