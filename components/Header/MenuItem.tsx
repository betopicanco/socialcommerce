import Link from 'next/link'

interface ItemMenuProps {
  key: number
  title: string,
  href: string
  icon?: JSX.Element
}

const MenuItem = (props: ItemMenuProps) => {
  const {
    key,
    href,
    title,
    icon
  } = props;

  return (
    <Link href={href} passHref>
      <li key={key} 
        className={`
          bg-blue-700/70
          rounded-md
          border border-violet-500
          text-white
          py-1 mx-2 my-4
          cursor-pointer
          flex justify-center
        `}>
          <span className='flex'>
            <strong>{title}</strong>
            <span className='ml-1 pt-1'>{icon}</span>
          </span>
          
      </li>
    </Link>
  );
}

export default MenuItem;