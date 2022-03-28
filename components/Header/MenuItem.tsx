import Link from 'next/link'

interface ItemMenuProps {
    title: string,
    href: string
}

const MenuItem = (props: any) => {

    const styles = {
        li: `
            bg-violet-500 text-yellow-200 
            border border-purple-300
            rounded-lg
            py-1 px-2 m-2
        `
    }

    return (
        <li className={styles.li} key={props.key}>
            <Link href={props.href} passHref>
                {props.title}
            </Link>
        </li>
    )
}

export default MenuItem