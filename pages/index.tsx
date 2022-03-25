import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className={`bg-neutral-800`}>
        <Layout>
            <Feed />
        </Layout>
    </div>
  )
}

export default Home
