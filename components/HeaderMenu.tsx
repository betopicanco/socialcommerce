import ItemMenu from "./ItemMenu"

interface HeaderMenuProps {
    items: {href:string, title:string}
}

const HeaderMenu = (props:any) => {

    const styles = {
        nav: `
            flex fixed right-0 z-40
            w-20 bg-yellow-300 rounded-b-lg
            items-center
        `,
        li: `
            bg-black text-yellow-300
            rounded-lg
            py-1 px-2 m-2 
            mx-auto
        `
    }

    return (
        <nav className={styles.nav}>
            <ul className={``}>
                <li className={`
                    bg-black text-yellow-300
                    rounded-lg
                    py-1 px-2 m-2 
                    mx-auto
                `}>
                    <ItemMenu title={props.menuItems.title} href={props.menuItems.href}/>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderMenu