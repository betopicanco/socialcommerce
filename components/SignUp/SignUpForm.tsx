import Button from "../Button"
import Input from "../Input"

const SignUpForm = () => {
    return (
        <>
            <Input type="text" id="name" label="Nome"/>

            <Input type="email" id="email" label="E-mail"/>

            <Input type="password" id="pass" label="Senha"/>

            <Input type="password" id="confirm_pass" label="Confirmar Senha"/>

            <div className={` mt-4 `}>
                <Button content="Confirmar" />
            </div>
        </>
    )
}

export default SignUpForm