import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Styles from '../../style/Styles';
import {LoggingContext} from '../../components/Context';

const SignIn = () => {
  const {setIsLogging} = useContext(LoggingContext);

  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Sign In</Text>
      <Button
        title="Sign In"
        onPress={() => {
          setIsLogging(true);
        }}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
