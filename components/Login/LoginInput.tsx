interface LoginInputProps {
    label: string,
    id: string,
    type: string
}

const LoginInput = (props: LoginInputProps) => {
    const style = {
        div: `
            my-4
        `,
        input: `
            w-full rounded-md
            caret-yellow-400
            focus:outline-none
            focus:ring focus:ring-purple-300
        `
    }

    return (
        <div className={style.div}>
            <label htmlFor={props.id}>{props.label}</label>
            <br />
            <input className={style.input} type={props.type} id={props.id}/>
        </div>
    )
}

export default LoginInput