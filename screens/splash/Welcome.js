import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Styles from '../../style/Styles';

const Welcome = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Welcome</Text>
      {navigation && (
        <Button
          title="Sign In"
          onPress={() => {
            navigation.navigate('SignIn');
          }}
        />
      )}
      {navigation && (
        <Button
          title="Sign Up"
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
      )}
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
