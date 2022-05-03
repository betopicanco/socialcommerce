interface CommentsProps {
    comments: Comment[]
}

const Comments = (props: any) => {

    return (
        <ul>
            {props.comments.map((comment:any, i:number) => {
                return (
                    <li className={`py-1`} key={i}>
                        <strong>{comment.author}: </strong>{comment.content}
                    </li>
                )
            })}
        </ul>
    )
}

export default Comments