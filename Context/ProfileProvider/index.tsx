import { useState } from "react";
import ProfileContext from "./context";
import profile from "../../pages/api/profile/interface";

interface ProfileProviderProps {
  children: JSX.Element,
  profile: profile
}

const ProfileProvider = (props: ProfileProviderProps) => {
  const { children, profile } = props;

  type profileSection = 'feed' | 'shop' | 'exclusive';
  const [ 
    currentSection, 
    setCurrentSection 
  ] = useState<profileSection>('feed');
 
  return (
    <ProfileContext.Provider 
      value={{
        currentSection, setCurrentSection, profile
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;