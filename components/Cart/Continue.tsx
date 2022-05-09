import Link from "next/link";

const Continue = (props: {total: number}) => {
  const { total } = props;
  return (
    <div className={`
      bg-purple-700/20
        rounded-top rounded-lg
        border border-purple-700
        w-full fixed bottom-0
        flex mb-10 pb-6
    `}>
      <div className={` 
        ml-4 mt-2 w-3/5
        text-yellow-300 text-sm`}>
        <div>
          total:
        </div>
        <div>
          <span>R$ </span> 
          <span className="text-lg">
            <strong>{total}</strong>
          </span>
        </div>
      </div>

      <div className="mt-6">
        <Link
          href={'/test'}
          passHref>
          <strong className={`
          text-white p-2 rounded-md
            bg-violet-700
          `}>
            Continuar
          </strong>
        </Link>
      </div>
    </div>
  )
}

export default Continue;