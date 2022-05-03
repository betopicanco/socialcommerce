import HeartFill from "../../Icons/HeartFill";
import HeartStroke from "../../Icons/HeartStroke";

interface HeartProps {
    liked: boolean,
    setLiked: (liked: boolean) => void
}

const Heart = (props: HeartProps) => {
    const { liked} = props;

    return (
        <div className={`h-6 w-6 mr-2`} onClick={() => props.setLiked?.(!liked)}>
            {liked ? (
              <HeartFill />
            ) : (
              <HeartStroke />
            )}
        </div>
    )
}

export default Heart