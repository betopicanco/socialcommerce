import Header from "./Header"
import HeaderMenu from "./HeaderMenu"

const Layout = (props: any) => {

    const menuItems = props.menuItems

    return (
        <>
            <Header/>
            {/* <HeaderMenu menuItems={menuItems}/> */}
            {props.children}
        </>
    )

}

export default Layout