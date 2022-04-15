interface DateProps {
    children: string,
    style: string
}

const Date = (props: DateProps) => {
    const { style, children } = props

    return (
        <span className={style}>
            {children}
        </span>
    )
}

export default Date