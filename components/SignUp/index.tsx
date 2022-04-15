import Form from "../Form";
import SignUpForm from "./SignUpForm";

interface SignUpMainProps {
    children: JSX.Element,
}

const SignUpMain = (props: SignUpMainProps) => {
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
                <SignUpForm/>
            </Form>
        </main>
    )
}

export default SignUpMain