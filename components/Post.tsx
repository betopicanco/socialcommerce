import Image from "next/image"
import Batman from "../public/img/capas/batman.jpg"
import Icons from "./Icons"

interface PostProps {
    genre: string,
    date: string
    img: string,
    title: string,
    content: string,
}

const Post = (props: any) => {
    
    const styles = {
        post: `
            py-4
            border-b border-neutral-600
        `,
        type: `
            inline-flex py-1 px-2 rounded
            bg-yellow-300 text-black font-bold
        `,
        date: `
            inline-flex text-xs py-2 text-neutral-400
        `,
        img: `
            my-2 x-0
        `,
        title: `
            text-xs leading-2
            sm:text-base
        `,
        content: `
        
        `  
    }

    const image = props.img

    return (
        <div className={styles.post}>
            <div className={`flex justify-between px-4`}>
                <h2 className={styles.type}>
                    {props.type}
                </h2>
                
                <span className={styles.date}>
                    {props.date}
                </span>
            </div>

            <div className={styles.img}>
                <Image 
                    src={image} layout="responsive"  
                    width={100} height={50}/>
            </div>

            <div className={`px-4`}>
                <p className={styles.title}>
                    {props.title}
                </p>
                <p className={styles.content}>

                </p>

                <Icons/>
            </div>
            
        </div>
    )
}

export default Post