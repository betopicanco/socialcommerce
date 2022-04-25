import Image from "next/image"
import { useState } from "react"

import CommentArea from "../CommentArea/CommentArea"
import Icons from "../Icons"
import Date from "./Date"
import ProfileName from "./ProfileName"
import ProfilePic from "./ProfilePic"
import Title from "./Title"

interface PostProps {
    key:number,
    author: {
        profilePic: string,
        profileName: string
    },
    date: string,
    img: string,
    title: string,
    liked: boolean
}

const Post = (props: PostProps) => {
    const [liked, setLiked] = useState<boolean>(props.liked ?? false)
    const [comment, setComment] = useState<boolean>(false)
    const { author, date, title, img } = props

    const styles = {
        post: `
            pt-4
            border-b border-neutral-600
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
                <div className={`flex`}>
                    <ProfilePic pic={author.profilePic}/>
                    <ProfileName name={author.profileName}/>
                </div>

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