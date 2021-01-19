import React, {useState} from 'react';

import {AppContext, LoggingContext} from '../components/Context';
import ModalsNav from './ModalsNav';

const Screens = () => {
  const [isLogging, setIsLogging] = useState(false);
  // Way to pass props to Stack.Screen
  const appData = {
    appData: true,
  };
  return (
    <AppContext.Provider value={appData}>
      <LoggingContext.Provider value={{isLogging, setIsLogging}}>
        <ModalsNav />
      </LoggingContext.Provider>
    </AppContext.Provider>
  );
};

export default Screens;
