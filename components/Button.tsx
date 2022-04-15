interface ButtonProps {
    content: string
}

const Button = (props: ButtonProps) => {
    const style =  `
        bg-violet-400 px-2 py-1 rounded-md
        text-lg drop-shadow-md
        text-white w-min mx-auto
        active:bg-purple-500
    `;
    const { content } = props;

    return (
        <div className={style}>
            <button>
                <strong>{content}</strong>
            </button>
        </div>
    )
}

export default Button