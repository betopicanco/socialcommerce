interface TypeProps {
    children: string,
    style: string
}

const Type = (props: TypeProps) => {
    const { children, style } = props
    return (
        <h2 className={style}>
            {children}
        </h2>
    )
}

export default Type