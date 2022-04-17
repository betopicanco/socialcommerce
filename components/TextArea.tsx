import Label from "./Label"
interface TextAreaProps {
    id: string,
    label: string,
    rows?: number
}
const TextArea = (props: TextAreaProps) => {
    const { id, label, rows } = props;
    return (
        <>
            <Label id={id} content={label}/>
            <br />
            <textarea 
                className={`
                    w-full rounded-md
                    caret-yellow-400
                    focus:outline-none
                    focus:ring focus:ring-purple-300
                    pl-3 p-1 mt-1
                `}
                name="" id="" rows={rows}
            />
        </>
    )
}

export default TextArea