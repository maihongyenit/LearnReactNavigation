import React from 'react';
import {StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabBar from './MainTabBar';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MainTabBar">
      <Drawer.Screen
        name="MainTabBar"
        component={MainTabBar}
        options={{title: 'Main'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;

const styles = StyleSheet.create({});
