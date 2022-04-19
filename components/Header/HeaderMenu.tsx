import MenuItem from "./MenuItem"

interface HeaderMenuProps {
    items: {href:string, title:string}
}

const HeaderMenu = (props:any) => {

    const styles = {
        nav: `
            flex fixed right-0 z-40 w-20 
            bg-violet-400/30 rounded-b-lg 
            border-b border-l border-r border-violet-400
        `
    }

    return (
        <nav className={styles.nav}>
            <ul className={`mx-auto`}>
                {props.menuItems.map((menuItem: any, i:number) => {
                    return (
                        <MenuItem href={menuItem.href} title={menuItem.title} key={i}/>
                    )
                })}
            </ul>
        </nav>
    )
}

export default HeaderMenu