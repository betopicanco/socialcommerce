import Link from "next/link";

interface BottomMenuItemProps {
    children: JSX.Element,
    href: string
}

const BottomMenuItem = (props: BottomMenuItemProps ) => {
    const { children, href } = props;
    const style = `
        p-1 mx-2
    `;

    return (
        <Link href={href} passHref>
            <div className={style}>
                {children}
            </div>  
        </Link>
    )
}

export default BottomMenuItem