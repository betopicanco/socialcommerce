import { NextPage } from "next";
import Layout from "../components/Layout";
import PublishArea from "../components/PublishArea";

const Publish:NextPage = () => {
    const menuItems = [
        { href: '/', title: 'home' }
    ];

    return (
        <div className={`bg-neutral-800 h-screen`}>
            <Layout menuItems={menuItems}>
                <PublishArea/>
            </Layout>
        </div>
    )
}

export default Publish 