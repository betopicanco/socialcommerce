import { NextPage } from "next";
import Layout from "../components/Layout";
import LoginForm from "../components/Login/LoginForm";
import SignUpMain from "../components/SignUp";

const SignUp:NextPage = () => {
  return (
    <div className={` min-h-screen `}>
      <Layout>
        <SignUpMain>
            <LoginForm/>
        </SignUpMain>
      </Layout>
    </div>
  );
}

export default SignUp