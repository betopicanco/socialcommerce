import Link from "next/link";

const Title = (props: {children: string, id: number}) => {
  const { children, id } = props;

  return (
    <Link 
      href={`/post/${id}`}
      passHref>
      <p className={`
        text-xs 
        text-white
        active:text-yellow-400
        leading-2
        sm:text-base
      `}>
        {children}
      </p>
    </Link>
  );
};

export default Title;