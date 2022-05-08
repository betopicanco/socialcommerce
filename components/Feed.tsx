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
  };

    const posts = [
        {
          id: 1,
          profile: {
              pic: '/img/profile_pic/betopicanco.jpg',
              name: 'betopicanco'
          },
          liked: false,
          date: '24/03/2022',
          picture: '/img/capas/batman.jpg',
          title: 'Eu com 10 anos quando brincava de pique-esconde:',
          isProduct: false
        },{
          id: 2,
          profile: {
              pic: '/img/profile_pic/jbl-logo-2.png',
              name: 'jbloficial'
          },
          liked: false,
          date: '24/03/2022',
          picture: '/img/capas/fone-jbl.png',
          title: 'Fone de ouvido Over Ear JBL T710',
          isProduct: true
        },{
            id: 3,
            profile: {
                pic: '/img/profile_pic/logo_besouroz.jpg',
                name: 'besouroZ'
            },
            liked: false,
            date: '24/03/2022',
            picture: '/img/capas/cuphead.jpg',
            title: 'Cuphead foi renovada para a segunda temporada e estreia ainda em 2022',
            isProduct: false
        }
    ];

  return (
    <div id="feed" className={styles.feed}>
      {posts.map((p) => (
        <Post
          key={p.id}
          profile={p.profile}
          liked={p.liked}
          date={p.date}
          picture={p.picture}
          title={p.title}
          isProduct={p.isProduct}
        />
      ))}
    </div>
  )
}

export default Feed