import React from 'react';

import {AppContext} from '../components/Context';
import Navigators from './Navigators';

const Screens = () => {
  const someAppData = {
    data1: {},
    data2: 1,
  };
  return (
    <AppContext.Provider value={someAppData}>
      <Navigators />
    </AppContext.Provider>
  );
};

export default Screens;
