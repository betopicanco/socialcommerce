import Image from "next/image"
import Link from "next/link"
import Logo from "../public/img/icons/logo-besouroz.png"

const Header = () => {
    const styles = {
        header: `
            fixed top-0 w-full z-50
            flex justify-between
            bg-gradient-to-r from-purple-600 to-violet-500 
            p-2 sm:p-4 =
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
            p-1 rounded-md bg-violet-400 
            cursor-pointer drop-shadow-md
        `,
        svg: `
            stroke-yellow-300 
            h-6 sm:h-10
            w-6 sm:w-10
        `
    }
    
    const logoSize = '50px'

    return (
        <header className={styles.header}>
            {/* <Link href="/" passHref> */}
            <div>
                <div className={`hidden sm:inline-block`}>
                    <Image
                        alt="logo"
                        src={Logo} 
                        width={styles.image.width} 
                        height={styles.image.height}
                    />
                </div>
                
                <h1 className={styles.h1}>BesouroZ</h1>
            </div>
            {/* </Link> */}

            <div className={styles.menuIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
        </header>    
    )
}

export default Header