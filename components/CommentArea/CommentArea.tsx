import { useState } from "react"
import NewComment from "./NewComment"
import Comments from './Comments'
import Comment from "../../core/Comment"

const CommentArea = (props: any) => {

    const styles = {
        commentArea: `
            bg-neutral-900
            py-2 px-4
            text-xs
        `
    }
    let currentComments = [
        {author: 'Fulano', content: 'Muito Bom'},
        {author: 'Siclano', content: 'Incrível'},
        {author: 'Beltrano', content: 'Sensacional'}
    ]

    const [commentContent, setCommentContent] = useState('')
    const [comments, setComments] = useState(currentComments)

    function addComment() {
        comments.push({author: 'Você', content: commentContent})
        setComments(comments)
        setCommentContent('')
    }

    return (
        <div className={styles.commentArea}>
            <Comments comments={comments}/>
            <NewComment value={commentContent} onChange={setCommentContent} addComment={addComment}/>
        </div>
    )
}

export default CommentArea