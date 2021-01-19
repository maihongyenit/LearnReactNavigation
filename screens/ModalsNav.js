import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Modals from './modals/Modals';
import RootStack from './RootStack';

const Stack = createStackNavigator();

const ModalsNav = () => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      initialRouteName="RootStack">
      <Stack.Screen name="RootStack" component={RootStack} />
      <Stack.Screen name="Modals" component={Modals} />
    </Stack.Navigator>
  );
};

export default ModalsNav;

const styles = StyleSheet.create({});
