interface ButtonProps {
    content: string
}

const Button = (props: ButtonProps) => {
    const style =  `
        bg-violet-700 px-4 py-1 
        rounded-md border-2 border-violet-400
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