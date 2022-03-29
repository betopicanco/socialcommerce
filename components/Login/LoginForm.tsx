import Link from "next/link"
import Button from "./Button"
import LoginInput from "./LoginInput"

const LoginForm = () => {
    const styles = {
        main: `
            mt-12 sm:mt-20
            mx-auto md:w-2/3
            flex justify-center items-center h-4/5
        `,
        form: `
            w-4/5 sm:w-2/6 
            bg-violet-400/30
            border-4 border-violet-400 rounded-lg
            p-4 drop-shadow-md
        `,
        title: `
            inline-block
            bg-neutral-800 px-2 py-1
            text-yellow-300 bold rounded-md
            border border-violet-400
        `,
        forgotPassword: `
            text-center text-red-500
        `
    }

    return (
        <main className={styles.main}>
            <form className={styles.form} action="">
                <LoginInput id="email" type="text" label="Email"/>

                <LoginInput id="password" type="password" label="Senha"/>

                <Button content="Entrar"/>
                
                {/* <div className={styles.forgotPassword}>
                    <Link href={'/test'} passHref> 
                        <small>esqueceu a senha?</small> 
                    </Link>
                </div> */}
            </form>
        </main>
    )
}

export default LoginForm