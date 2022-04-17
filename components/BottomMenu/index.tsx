import Camera from "../Icons/Camera"
import HomeIcon from "../Icons/HomeIcon"
import ShoppingBag from "../Icons/ShoppingBag"
import ShoppingCart from "../Icons/ShoppingCart"
import BottomMenuItem from "./BottomMenuItem"

interface BottomMenuProps {

}

const BottomMenu = (props: BottomMenuProps) => {
    const iconStyle = `
        stroke-neutral-400
        h-6 sm:h-10
        w-6 sm:w-10
    `;
    
    return (
        <nav className={`
            fixed bottom-0 w-full md:hidden
            bg-neutral-800/70
            border-t border-neutral-600 rounded-t-lg
            p-2 flex justify-center
        `}>
            <BottomMenuItem href='/test'>
                <Camera style={iconStyle}/> 
            </BottomMenuItem>
            
            <BottomMenuItem href='/'>
                <HomeIcon style={iconStyle}/>
            </BottomMenuItem>

            <BottomMenuItem href='/test'>
                <ShoppingBag style={iconStyle}/>
            </BottomMenuItem>
        </nav>
    )
}

export default BottomMenu