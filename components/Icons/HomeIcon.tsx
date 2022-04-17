interface HomeIconProps {
    style: string
}

const HomeIcon = (props: HomeIconProps) => {
    const  style  = `
        fill-neutral-400
        h-6 sm:h-10
        w-6 sm:w-10
    `;
    
    return  (
        <svg xmlns="http://www.w3.org/2000/svg" className={style} viewBox="0 0 20 20" fill="transparent">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
    )
}

export default HomeIcon