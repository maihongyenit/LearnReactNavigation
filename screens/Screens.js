import React from 'react';

import {AppContext} from '../components/Context';
import Navigators from './Navigators';

const Screens = () => {
  // Way to pass props to Stack.Screen
  const appData = {
    appData: true,
  };
  return (
    <AppContext.Provider value={appData}>
      <Navigators />
    </AppContext.Provider>
  );
};

export default Screens;
