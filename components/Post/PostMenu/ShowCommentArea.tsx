import CommentCloud from "../../Icons/CommentCloud";

interface ShowCommentAreaProps {
  onClick: () => void
}

const ShowCommentArea = (props: ShowCommentAreaProps) => {
  return (
    <div onClick={ () => props.onClick() }>
      <CommentCloud />
    </div>
  );
};

export default ShowCommentArea;