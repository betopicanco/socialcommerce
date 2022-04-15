import Button from "../Button"
import Input from "../Input"

const LoginForm = () => {
    return (
        <>
            <Input id="email" type="email" label="Email"/>

            <Input id="password" type="password" label="Senha"/>

            <div className={`mt-4`}>
                <Button content="Entrar"/>
            </div>
        </>
    )
}

export default LoginForm