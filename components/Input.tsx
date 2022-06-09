import Label from "./Label";

interface InputProps {
    id: string,
    type: string,
    label: string,
}

const Input = (props: InputProps) => {
    const { id, type, label } = props;
    const style = {
      div: `
        my-4
      `,
      input: `
        w-full rounded-md
        caret-yellow-400
        focus:outline-none
        focus:ring focus:ring-purple-300
        pl-3 p-1 mt-1
      `
    }

    return (
      <div className={style.div}>
        <Label id={id} content={label}/>

        <br />

        <input 
            type={type} id={id}
            className={style.input} 
        />
      </div>
    )
}

export default Input