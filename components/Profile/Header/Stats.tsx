interface StatsProps {
  value: number,
  description: string
}

const Stats = (props: StatsProps) => {
  const { value, description } = props;
  
  return (
    <div>
      {value}
      {description}
    </div>
  );
}

export default Stats;