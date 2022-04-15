import { NextPage } from "next";
import Layout from "../components/Layout";
import LoginForm from "../components/Login/LoginForm";
import SignUpMain from "../components/SignUp";

const SignUp:NextPage = () => {
    const menuItems = [
        { href: '/', title: 'home' }
    ];

    return (
        <div className={` h-screen `}>
            <Layout menuItems={menuItems}>
                <SignUpMain>
                    <LoginForm/>
                </SignUpMain>
            </Layout>
        </div>
    )
}

export default SignUp