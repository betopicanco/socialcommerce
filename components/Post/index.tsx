import Image from "next/image"
import { useState } from "react"

import CommentArea from "../CommentArea/CommentArea"
import Icons from "../Icons"
import Date from "./Date"
import Title from "./Title"
import Type from "./Type"

interface PostProps {
    type: string,
    date: string,
    img: string,
    title: string,
    liked: boolean
}

const Post = (props: PostProps) => {
    const [liked, setLiked] = useState<boolean>(props.liked ?? false)
    const [comment, setComment] = useState<boolean>(false)
    const { type, date, title, img } = props

    const styles = {
        post: `
            pt-4
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
        `
    }

    return (
        <div className={styles.post}>
            <div className={`flex justify-between px-4`}>
                <Type style={styles.type} >
                    {type}
                </Type>

                <Date style={styles.date} >
                    {date}
                </Date>
            </div>

            <div className={styles.img}>
                <Image 
                    src={img} alt={img} layout="responsive"  
                    width={100} height={50}
                />
            </div>

            <div className={`px-4 pb-4`}>
                <Icons 
                    liked={liked} 
                    comment={comment} 
                    setLiked={setLiked} 
                    setComment={setComment}
                />

                <Title style={styles.title} >
                    {title}
                </Title>
                
            </div>

            {comment ? (
                <CommentArea/>
            ) : ''}
        </div>
    )
}

export default Post