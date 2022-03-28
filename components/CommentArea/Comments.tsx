interface CommentsProps {
    comments: Comment[]
}

const Comments = (props: any) => {

    return (
        <ul>
            {props.comments.map((comment:any) => {
                return (
                    <li className={`py-1`}>
                        <strong>{comment.author}: </strong>{comment.content}
                    </li>
                )
            })}
        </ul>
    )
}

export default Comments