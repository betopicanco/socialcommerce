import Link from 'next/link'

interface NewCommentProps {
    onChange?: (value: any) => void,
    addComment?: () => void,
    value: string
}

const NewComment = (props: NewCommentProps) => {

    const styles = {
        newComment: `
            flex
            mt-2 
        `,
        commentInput: `
            py-1 px-2 w-full 
            rounded-l-md text-neutral-800
        `,
        btn: `
            bg-indigo-700/50
            border border-violet-500
            text-yellow-300 
            p-2 rounded-r-md
            active:bg-neutral-700
        `
    }

    return (
        <div className={styles.newComment}>
            <input 
                className={styles.commentInput} 
                type="text" 
                placeholder="Adicione um comentário" 
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}/>

            
            <div className={styles.btn} onClick={props.addComment}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
        </div>
    )
}

export default NewComment