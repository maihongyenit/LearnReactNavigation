import React, {useContext} from 'react';

import Setting from './Setting';
import {AppContext} from '../../components/Context';

const SettingContextWraper = (props) => {
  const appData = useContext(AppContext);

  return <Setting appData={appData} {...props} />;
};

export default SettingContextWraper;
