import Link from 'next/link'

interface ItemMenuProps {
    title: string,
    href: string
}

const MenuItem = (props: any) => {

    const styles = {
        li: `
            bg-violet-500 text-yellow-200 
            border border-yellow-300
            rounded-lg text-center
            py-1 px-2 m-2 cursor-pointer
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