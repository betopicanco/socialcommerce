import { useContext } from "react";
import ProfileContext from '../../../Context/ProfileProvider/context'

interface OptionProps {
  children: string,
  value: 'feed' | 'shop' | 'exclusive'
}
const Option = (props: OptionProps) => {
  const { value, children} = props;
  const { setCurrentSection } = useContext(ProfileContext);

  return (
    <a onClick={() => setCurrentSection(value)}>
      {children}
    </a>
  );
}

export default Option;