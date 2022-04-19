import Link from 'next/link'

interface ItemMenuProps {
    title: string,
    href: string
}

const MenuItem = (props: any) => {

    const styles = {
        li: `
            bg-violet-600
            rounded-lg
            border border-purple-400
            text-center text-white
            py-1 px-2 m-2 
            cursor-pointer
        `
    }

    return (
        <li className={styles.li} key={props.key}>
            <Link href={props.href} passHref>
                <strong>{props.title}</strong>
            </Link>
        </li>
    )
}

export default MenuItem