import CommentCloud from "../../Icons/CommentCloud";

interface ShowCommentAreaProps {
  onClick: () => void
}

const ShowCommentArea = (props: ShowCommentAreaProps) => {
  return (
    <div className={` mr-2 active:bg-purple-300/30 rounded-full`} onClick={ () => props.onClick() }>
      <CommentCloud />
    </div>
  );
};

export default ShowCommentArea;