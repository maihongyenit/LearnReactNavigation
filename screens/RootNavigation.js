import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Modals from './modals/Modals';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="Main" component={MainNavigation} />
      <Stack.Screen name="Modals" component={Modals} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
