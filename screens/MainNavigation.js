import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './detail/Detail';
import Home from './home/Home';
import SettingContextWraper from './setting/SettingContextWraper';
import CustomHeaderTitle from './header/CustomHeaderTitle';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Screen',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({navigation, route}) => ({
          title: route.params.name,
          headerTitle: (props) => (
            <CustomHeaderTitle {...props} title="Detail header" />
          ),
          headerRight: () => (
            <Button title="Click" onPress={() => alert('Btn clicked')} />
          ),
          headerStyle: {
            backgroundColor: 'red',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            color: 'black',
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="Setting"
        component={SettingContextWraper}
        initialParams={{
          inittial: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
