import Post from "./Post";
import PostInterface from "./Post/interface";

interface FeedProps{
  feed: PostInterface[]
}

const Feed = (props: FeedProps) => {
  const styles = {
    feed: `
        mt-12 sm:mt-20 
        pb-12 sm:pb-20
        mx-auto md:w-2/3
        border-x border-neutral-600
        text-white
    `
  };

  return (
    <div id="feed" className={styles.feed}>
      {props.feed.map((feed) => (
        <Post
          key={feed.id}
          data={feed}
        />
      ))}
    </div>
  );
}

export default Feed;