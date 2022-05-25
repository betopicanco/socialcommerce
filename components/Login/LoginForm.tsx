import Button from "../Button"
import Input from "../Input"
import ThirdButton from "../ThirdButton"

const LoginForm = () => {
    return (
      <>
        <Input id="email" type="email" label="Email"/>

        <Input id="password" type="password" label="Senha"/>

        <div className={`mt-8 mb-2 text-center`}>
            <ThirdButton text="Entrar"/>
        </div>
      </>
    )
}

export default LoginForm;