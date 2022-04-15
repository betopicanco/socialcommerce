interface InputProps {
    id: string,
    type: string,
    label: string,
}

const Input = (props: InputProps) => {
    const { id, type, label } = props;
    const styles = {
        div: `
            my-4
        `,
        input: `
            w-full rounded-md
            caret-yellow-400
            focus:outline-none
            focus:ring focus:ring-purple-300
            pl-3 p-1
        `,
        label: `
            text-violet-500
        `
    }

    return (
        <div className={styles.div}>
            <label className={styles.label} htmlFor={id}>
                <strong>{label}</strong>
            </label>

            <br />

            <input className={styles.input} type={type} id={id}/>
        </div>
    )
}

export default Input