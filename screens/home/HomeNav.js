import React, {useLayoutEffect, useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Home from './Home';
import HomeDetail from './HomeDetail';

const Stack = createStackNavigator();

const HomeNav = ({navigation, route}) => {
  const routeName = useMemo(() => getFocusedRouteNameFromRoute(route), [route]);

  useLayoutEffect(() => {
    if (routeName === 'Home') {
      navigation.setOptions({tabBarVisible: true});
    } else if (routeName === 'HomeDetail') {
      navigation.setOptions({tabBarVisible: false});
    }
  }, [navigation, routeName]);

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
