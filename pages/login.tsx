import { NextPage } from "next";
import Layout from "../components/Layout";
import LoginForm from "../components/Login/LoginForm";
import LoginMain from '../components/Login';

const Login: NextPage = () => {

  const menuItems = [
    { href: '/',  title: 'home' },
    { href: '/signUp', title: 'sign up' }
  ];

  return (
    <div className={` h-screen `}>
      <Layout menuItems={menuItems}>
        <LoginMain>
          <LoginForm />
        </LoginMain>
      </Layout>
    </div>
  );
}
export default Login;