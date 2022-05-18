import HomeIcon from "../Icons/HomeIcon"
import Plus from "../Icons/Plus"
import ShoppingBag from "../Icons/ShoppingBag"
import BottomMenuItem from "./BottomMenuItem"

const BottomMenu = () => {
    const style = {
        nav: `
            fixed bottom-0 w-full md:hidden
            bg-neutral-800
            border-t border-neutral-600 rounded-t-lg
            p-2 flex justify-center 
        `,
        icon: `
            stroke-1
            stroke-yellow-300
            h-6 sm:h-10
            w-6 sm:w-10
        `
    }
    
    return (
      <aside>
        <nav className={style.nav}>
            <BottomMenuItem href='/publish'>
                <Plus style={style.icon}/>
            </BottomMenuItem>
            
            <BottomMenuItem href='/'>
                <HomeIcon style={style.icon}/>
            </BottomMenuItem>

            <BottomMenuItem href='/shop'>
              <ShoppingBag style={style.icon}/>
            </BottomMenuItem>
        </nav>
      </aside>
    )
}

export default BottomMenu