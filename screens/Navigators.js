import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Detail from './detail/Detail';
import Home from './home/Home';
import SettingContextWraper from './setting/SettingContextWraper';
import CustomHeaderTitle from './header/CustomHeaderTitle';

const Stack = createStackNavigator();

const Navigators = () => {
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

export default Navigators;
