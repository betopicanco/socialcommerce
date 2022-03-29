import { NextPage } from "next"
import Layout from "../components/Layout"
import LoginForm from "../components/Login/LoginForm"

const Login:NextPage = () => {

    const menuItems = [
        { href: '/',  title: 'home' }
    ]

    return (
        <div className={` h-screen `}>
            <Layout menuItems={menuItems}>
                <LoginForm />
            </Layout>
        </div>
    )
}
export default Login