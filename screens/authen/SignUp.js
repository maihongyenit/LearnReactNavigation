import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CommonActions} from '@react-navigation/native';

import Styles from '../../style/Styles';

const SignUp = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Sign Up</Text>
      {navigation && (
        <Button
          title="Sign In"
          onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [{name: 'SignIn'}],
              }),
            );
          }}
        />
      )}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
