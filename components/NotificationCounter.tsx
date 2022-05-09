interface NotificationCounterProps {
  counter: number
}
const NotificationCounter = (props:NotificationCounterProps) => {
  const { counter } = props;
  return (
    <span className={`
      bg-yellow-200 rounded-full text-xxs 
      px-1
      text-center
      fixed top-0 right-0
    `}>
      {counter > 0 ? counter : ''}
    </span>
  );
}

export default NotificationCounter;