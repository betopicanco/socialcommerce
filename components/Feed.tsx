import Post from "./Post"

const Feed = () => {

    const styles = {
        feed: `
            mt-12 sm:mt-20
            mx-auto md:w-2/3
            border-x border-neutral-600
            text-white
        `
    }

    return (
        <div id="feed" className={styles.feed}>
            <Post 
                liked={false}
                type={'Filmes'} 
                date={'24/03/2022'}
                img={'/img/capas/cuphead.jpg'}
                title={'Cuphead foi renovada para a segunda temporada e estreia ainda em 2022'}
            />

            <Post 
                liked={false}
                type={'Filmes'} 
                date={'24/03/2022'}
                img={'/img/capas/batman.jpg'}
                title={'Eu com 10 anos quando brincava de pique-esconde:'}
            />
            
            <Post 
                liked={false}
                type={'Filmes'} 
                date={'24/03/2022'}
                img={'/img/capas/moon-knight.jpg'}
                title={'Cavaleiro da Lua | Marvel'}
            />
        </div>
    )
}

export default Feed