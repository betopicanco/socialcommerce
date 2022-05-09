import { useState } from 'react';
import LayoutContext from './context';

const LayoutProvider = ( {children} ) => {
  const [
    visibleMenu, 
    setVisibleMenu
  ] = useState<boolean>(false);

  return (
    <LayoutContext.Provider 
      value={{visibleMenu, setVisibleMenu}}>
        {children}
    </LayoutContext.Provider>
  );
}

export default LayoutProvider;
