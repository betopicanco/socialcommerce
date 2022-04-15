interface TitleProps {
    children: string,
    style: string
}

const Title = (props: TitleProps) => {
    const { children, style } = props
    return (
        <p className={style}>
            {children}
        </p>
    )
}

export default Title