interface StatsProps {
  value: number,
  description: string
}

const Stats = (props: StatsProps) => {
  const { value, description } = props;
  
  return (
    <div className="text-xs inline-block pr-4 pt-2">
      <div className="text-center">
        <strong>
          {value}
        </strong>
      </div>
      {description}
    </div>
  );
}

export default Stats;