interface ActionProps {
  checked?: boolean
  value: string
}

const Action = (props: ActionProps) => {
  const { checked, value } = props;
  const style = checked ? (
    `border border-yellow-300`
  ) : (
    `bg-blue-300`
  );

  return (
    <button className={style}>
      {value}
    </button>
  );
}

export default Action;