import { useState } from "react"
import Header from "./Header/Header"
import HeaderMenu from "./Header/HeaderMenu"

interface LayoutProps {
    menuItems: {},
}

const Layout = (props:any) => {

    const menuItems = props.menuItems
    const [visibleMenu, setVisibleMenu] = useState(false)

    return (
        <>
            <Header visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu}/>

            {visibleMenu ? (
                <HeaderMenu menuItems={menuItems}/>
            ) : ''}
            
            <div className={`mt-12 sm:mt-20`}>
                {props.children}
            </div>
        </>
    )

}

export default Layout