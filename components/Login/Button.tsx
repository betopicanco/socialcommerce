interface ButtonProps {
    content: string
}

const Button = (props: ButtonProps) => {
    const styles = {
        button: `
            bg-violet-400 px-2 py-1 rounded-md
            text-lg drop-shadow-md
            text-white w-min mx-auto
        `
    }

    return (
        <div className={styles.button}>
            <button><strong>{props.content}</strong></button>
        </div>
    )
}

export default Button