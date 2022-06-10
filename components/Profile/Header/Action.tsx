interface ActionProps {
  checked?: boolean
  value: string
}

const Action = (props: ActionProps) => {
  const { checked, value } = props;
  let style = `w-full md:w-auto py-1 rounded-md `;

  checked ? (
    style += `border border-yellow-300 text-yellow-300`
  ) : (
    style += `bg-indigo-600/40 border border-indigo-600`
  );

  return (
    <button 
      className={style}>
      {value}
    </button>
  );
}

export default Action;