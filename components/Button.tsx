interface ButtonProps {
    content: string
}

const Button = (props: ButtonProps) => {
    const style =  `
        bg-violet-500  
        rounded-md
        border-2 border-yellow-300
        text-lg text-white
        drop-shadow-md
        w-min mx-auto px-4 py-1
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