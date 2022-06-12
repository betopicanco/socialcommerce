import { useState } from "react";
import ProfileContext from "./context";
import profile from "../../pages/api/profile/interface";
import PostInterface from "../../components/Post/interface";

interface ProfileProviderProps {
  children: JSX.Element,
  profile: profile,
  feed: PostInterface[],
  shop: PostInterface[],
}

const ProfileProvider = (props: ProfileProviderProps) => {
  const { children, profile, feed, shop } = props;

  type profileSection = 'feed' | 'shop' | 'exclusive';
  const [ 
    currentSection, 
    setCurrentSection 
  ] = useState<profileSection>('feed');
 
  return (
    <ProfileContext.Provider 
      value={{
        currentSection, setCurrentSection, profile, feed, shop
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;