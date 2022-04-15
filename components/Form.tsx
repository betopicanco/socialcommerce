interface FormProps {
    children: JSX.Element
}

const Form = (props: FormProps) => {
    const style =`
        w-4/5 md:w-2/6 
        bg-violet-400/30
        border-4 border-violet-400 rounded-lg
        mt-4 p-4 drop-shadow-md
    `
    const { children } = props;

    return (
        <form className={style} action="">
            {children}
        </form>
    )
}

export default Form