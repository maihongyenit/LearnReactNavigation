import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './authen/SignIn';
import SignUp from './authen/SignUp';
import Welcome from './splash/Welcome';
import MainDrawer from './MainDrawer';
import {LoggingContext} from '../components/Context';

const Stack = createStackNavigator();

const RootStack = () => {
  const {isLogging} = useContext(LoggingContext);

  return (
    <Stack.Navigator initialRouteName="Welcome">
      {!isLogging && (
        <>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </>
      )}
      {isLogging && (
        <Stack.Screen
          name="MainTabBar"
          component={MainDrawer}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({});
