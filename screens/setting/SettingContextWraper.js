import React, {useContext} from 'react';

import Setting from './Setting';
import {AppContext} from '../../components/Context';

const SettingContextWraper = (props) => {
  const someAppData = useContext(AppContext);

  return <Setting appData={someAppData} {...props} />;
};

export default SettingContextWraper;
