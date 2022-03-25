import Link from 'next/link'

interface ItemMenuProps {
    title: string,
    href: string
}

const ItemMenu = (props: any) => {
    return (
        <>
            <Link href={props.href} passHref>
                {props.title}
            </Link>
        </> 
    )
}

export default ItemMenu