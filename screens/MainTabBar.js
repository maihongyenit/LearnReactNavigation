import React from 'react';
import {StyleSheet, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Detail from './detail/Detail';
import HomeStack from './home/HomeStack';
import SettingContextWraper from './setting/SettingContextWraper';
import CustomHeaderTitle from './header/CustomHeaderTitle';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({navigation, route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'HomeStack') {
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
        name="HomeStack"
        component={HomeStack}
        options={{
          title: 'Home',
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

export default MainTabBar;

const styles = StyleSheet.create({});
