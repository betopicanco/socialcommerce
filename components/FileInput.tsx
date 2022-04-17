import Label from "./Label";

interface FileInputProps {
    id: string,
    label: string
}
const FileInput = (props: FileInputProps) => {
    const { id, label } = props;
    const style = {
        input: `
            w-full p-1 mt-1
            file:w-full file:py-2 file:px-4
            file:rounded-lg file:text-sm file:font-semibold
            file:bg-white file:text-violet-700
        `
    };

    return (
        <div>
            <Label id={id} content={label}/>

            <input 
                id={id} type="file" 
                className={style.input}
            />
        </div>
    )
}

export default FileInput