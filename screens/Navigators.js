import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './detail/Detail';
import Home from './home/Home';
import SettingContextWraper from './setting/SettingContextWraper';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Setting" component={SettingContextWraper} />
    </Stack.Navigator>
  );
};

export default Navigators;
