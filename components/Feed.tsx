import Post from "./Post"

const Feed = () => {

    const styles = {
        feed: `
            mt-12 sm:mt-20 
            pb-12 sm:pb-20
            mx-auto md:w-2/3
            border-x border-neutral-600
            text-white
        `
    }

    const posts = [
        {
            id: 1,
            author: {
                profilePic: '/img/profile_pic/logo_besouroz.jpg',
                profileName: 'besouroZ'
            },
            liked: false,
            date: '24/03/2022',
            img: '/img/capas/cuphead.jpg',
            title: 'Cuphead foi renovada para a segunda temporada e estreia ainda em 2022'
        }, {
            id: 2,
            author: {
                profilePic: '/img/profile_pic/betopicanco.jpg',
                profileName: 'betopicanco'
            },
            liked: false,
            date: '24/03/2022',
            img: '/img/capas/batman.jpg',
            title: 'Eu com 10 anos quando brincava de pique-esconde:'
        }
    ]

    return (
        <div id="feed" className={styles.feed}>
            {posts.map((p) => (
                <Post
                    key={p.id}
                    author={p.author}
                    liked={p.liked}
                    date={p.date}
                    img={p.img}
                    title={p.title}
                />
            ))}
            {/* <Post 
                liked={false}
                date={'24/03/2022'}
                img={'/img/capas/cuphead.jpg'}
                title={'Cuphead foi renovada para a segunda temporada e estreia ainda em 2022'}
            /> */}

            {/* <Post 
                liked={false}
                date={'24/03/2022'}
                img={'/img/capas/batman.jpg'}
                title={'Eu com 10 anos quando brincava de pique-esconde:'}
            />
            
            <Post 
                liked={false}
                date={'24/03/2022'}
                img={'/img/capas/moon-knight.jpg'}
                title={'Cavaleiro da Lua | Marvel'}
            /> */}
        </div>
    )
}

export default Feed