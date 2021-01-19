import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthNavigation from './AuthNavigation';
import MainNavigation from './MainNavigation';
import {LoggingContext} from '../components/Context';

// const authScreens = {
//   Welcome: Welcome,
//   SignIn: SignIn,
//   SignUp: SignUp,
// };

// const mainScreens = {
//   Home: Home,
//   Detail: Detail,
//   Setting: SettingContextWraper,
// };

const Stack = createStackNavigator();

const Navigators = () => {
  const {isLogging} = useContext(LoggingContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {isLogging ? (
        <Stack.Screen name="Main" component={MainNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export default Navigators;
