const MenuIcon = () => {
    const style = `
        stroke-yellow-300 
        h-6 sm:h-10
        w-6 sm:w-10
    `
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={style} fill="none" 
                    viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
    )
}

export default MenuIcon