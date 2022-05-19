import { NextPage } from "next";
import Layout from "../components/Layout";
import LoginForm from "../components/Login/LoginForm";
import LoginMain from '../components/Login';

const Login: NextPage = () => {
  return (
    <div className={` min-h-screen `}>
      <Layout>
        <LoginMain>
          <LoginForm />
        </LoginMain>
      </Layout>
    </div>
  );
}
export default Login;