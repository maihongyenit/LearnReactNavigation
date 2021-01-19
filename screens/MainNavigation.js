import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Detail from './detail/Detail';
import HomeNav from './home/HomeNav';
import SettingContextWraper from './setting/SettingContextWraper';
import CustomHeaderTitle from './header/CustomHeaderTitle';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({navigation, route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'airplane' : 'airplane-outline';
          } else if (route.name === 'Detail') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else {
            iconName = focused
              ? 'american-football'
              : 'american-football-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNav}
        options={{
          title: 'Home Screen',
          tabBarBadge: 5,
        }}
      />
      <Tab.Screen
        name="Detail"
        component={Detail}
        options={({navigation, route}) => ({
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
      <Tab.Screen
        name="Setting"
        component={SettingContextWraper}
        initialParams={{
          inittial: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
