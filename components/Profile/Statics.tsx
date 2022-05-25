interface StaticsProps {
  posts: number,
  followers: number,
  subscribers: number
}

const Statics = (props: StaticsProps) => {
  const { posts, followers, subscribers } = props;
  const statStyle = `text-center mr-2`;
  return (
    <div className={`ml-4 pt-2 text-xs text-neutral-300 flex`}>
      <div className={statStyle}>
        <strong>{posts}</strong><br />
        Publicações
      </div>
      <div className={statStyle}>
        <strong>{followers}</strong><br />
        Seguidores
      </div>
      <div className={statStyle}>
        <strong>{subscribers}</strong><br />
        Assinantes
      </div>
    </div>
  );
}

export default Statics;