import Post from "./Post";
import PostInterface from "./Post/interface";

interface FeedProps{
  feed: PostInterface[]
}

const Feed = (props: FeedProps) => {
  const styles = {
    feed: `
      pb-12 sm:pb-20
      mx-auto md:w-2/3
      sm:border-x sm:border-neutral-600
      text-white
    `
  };

  return (
    <main className={styles.feed}>
      {props.feed.map((feed) => (
        <Post
          key={feed.id}
          data={feed}
        />
      ))}
    </main>
  );
}

export default Feed;