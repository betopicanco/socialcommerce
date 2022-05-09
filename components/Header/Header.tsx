import Link from "next/link"
import MenuIcon from "./MenuIcon";

const Header = () => {
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
            text-2xl sm:text-3xl
            hover:text-yellow-300
        `,
        image: {
            width: '44px',
            height: '40px'
        }, 
        menuIcon: `p-1 rounded-md bg-violet-400/30 
        cursor-pointer drop-shadow-md`
    };
    
    return (
        <header className={styles.header}>
            <Link href="/" passHref>
                <div className={`cursor-pointer`}>
                    <h1 className={styles.h1}>SocialCommerce</h1>
                </div>
            </Link>

            <MenuIcon/>
        </header>    
    )
}

export default Header