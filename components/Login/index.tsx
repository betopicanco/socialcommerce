import Form from "../Form";
import LoginInput from '../Input'
import Button from '../Button'
import LoginForm from "./LoginForm";

interface LoginProps {
    children: JSX.Element
}
const LoginMain = (props: LoginProps) => {
    const { children } = props;
    const styles = {
        main: `
            mt-12 sm:mt-20
            mx-auto md:w-2/3
            flex justify-center items-center h-4/5
        `,
    }

    return (
        <main className={styles.main}>
            <Form>
                <LoginForm/>
            </Form>
        </main>
    )
}

export default LoginMain