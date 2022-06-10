import { useContext, useState } from "react";
import ProfileContext from '../../../Context/ProfileProvider/context'

interface OptionProps {
  children: string,
  value: 'feed' | 'shop' | 'exclusive',
  selected?: boolean
}
const Option = (props: OptionProps) => {
  const { value, children} = props;
  const { currentSection, setCurrentSection } = useContext(ProfileContext);
  const selected = value === currentSection;
  let style = `w-full text-sm py-2`;
  selected ? (
    style += ` bg-yellow-300/10 text-yellow-300 `
  ) : (
    style += ` text-neutral-400 `
  );

  const handleClick = () => {
    setCurrentSection(value);
  }

  return (
    <button 
      className={style}
      onClick={() => handleClick()}>
      {children}
    </button>
  );
}

export default Option;