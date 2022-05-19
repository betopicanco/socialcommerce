interface DefaultBGProps {
  children: JSX.Element
}
const DefaultBG = (props: DefaultBGProps) => {
  const {children} = props;

  return (
    <div className={` min-h-screen bg-neutral-800 text-white`}>
      {children}
    </div>
  )
}

export default DefaultBG;