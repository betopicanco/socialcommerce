interface LabelProps {
    id: string,
    content: string
}
const Label = (props: LabelProps) => {
    const { id, content } = props;
    return (
        <label htmlFor={id} 
            className={` text-violet-500 `}>
            <strong>{content}</strong>
        </label>
    )
}

export default Label