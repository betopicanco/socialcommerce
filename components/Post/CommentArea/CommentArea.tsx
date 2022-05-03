import { useState } from "react"
import NewComment from "./NewComment"
import Comments from './Comments'

const CommentArea = (props: any) => {

    const styles = {
        commentArea: `
            bg-neutral-900
            py-2 px-4
            text-xs
        `
    }
    let currentComments = [
        {author: 'Fulano', content: 'Muito'},
        {author: 'Siclano', content: 'Gostei'},
        {author: 'Beltrano', content: 'Incrível'}
    ]

    const [commentContent, setCommentContent] = useState('')
    const [comments, setComments] = useState(currentComments)

    function addComment() {
        if(commentContent !== '') {
            comments.push({author: 'Você', content: commentContent})
            setComments(comments)
            setCommentContent('')
        }
    }

    return (
        <div className={styles.commentArea}>
            <Comments comments={comments}/>
            <NewComment value={commentContent} onChange={setCommentContent} addComment={addComment}/>
        </div>
    )
}

export default CommentArea