const NewComment = () => {

    const styles = {
        newComment: `
            flex
            mt-2 px-4 py-4
            bg-neutral-900
        `,
        commentInput: `
            py-1 px-2 w-full 
            rounded-l-md
        `,
        btn: `
            bg-neutral-600 
            text-yellow-300 bold 
            py-2 px-4 rounded-r-md
            active:bg-neutral-700
        `
    }

    return (
        <div className={styles.newComment}>
            <input className={styles.commentInput} type="text" placeholder="Adicione um comentário" />

            <input className={styles.btn} type="button" value=">" />
        </div>
    )
}

export default NewComment