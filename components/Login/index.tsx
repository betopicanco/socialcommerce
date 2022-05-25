import Form from "../Form";
import LoginForm from "./LoginForm";

const LoginMain = () => {
  const styles = {
    main: `
      mt-20 sm:mt-20
      md:w-2/3
      flex justify-center items-center h-4/5
    `
  };

  return (
    <main className={styles.main}>
      <Form>
        <LoginForm/>
      </Form>
    </main>
  );
}

export default LoginMain;