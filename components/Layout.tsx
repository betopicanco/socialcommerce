import Header from "./Header/Header"
import HeaderMenu from "./Header/HeaderMenu"

interface LayoutProps {
    menuItems: {},
}

const Layout = (props:any) => {

    const menuItems = props.menuItems

    return (
        <>
            <Header/>
            <HeaderMenu menuItems={menuItems}/>
            {props.children}
        </>
    )

}

export default Layout