import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/img/icons/logo-besouroz.png"
import MenuIcon from "../Icons/MenuIcon"

interface HeaderProps {
    visibleMenu: boolean,
    setVisibleMenu: (value: any) => void
}

const Header = (props: any) => {
    const styles = {
        header: `
            fixed top-0 w-full z-50
            flex justify-between
            bg-gradient-to-r from-purple-600 to-violet-500 
            p-2 sm:p-4 
        `,
        h1: `
            inline-flex ml-2 align-top
            text-yellow-200 text-4xl font-bold
            text-2xl sm:text-4xl
            hover:text-yellow-300
        `,
        image: {
            width: '44px',
            height: '40px'
        },
        menuIcon: `
            p-1 rounded-md bg-violet-400/30 
            cursor-pointer drop-shadow-md
        `
    }
    
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <div className={`cursor-pointer`}>
                    {/* <div className={`hidden sm:inline-block`}>
                        <Image
                            alt="logo"
                            src={Logo} 
                            width={styles.image.width} 
                            height={styles.image.height}
                        />
                    </div> */}
                    
                    <h1 className={styles.h1}>SocialCommerce</h1>
                </div>
            </Link>

            <div className={styles.menuIcon} onClick={() => props.setVisibleMenu(!props.visibleMenu)}>
                <MenuIcon />
            </div>
        </header>    
    )
}

export default Header