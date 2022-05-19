const ModestWarning = (props: {children: JSX.Element}) => {
  return (
    <div className={`text-neutral-500 p-4`}>
      {props.children}
    </div>
  );
}

export default ModestWarning;