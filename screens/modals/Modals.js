import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Styles from '../../style/Styles';

const Modals = ({navigation}) => {
  return (
    <View style={[Styles.container, styles.container]}>
      <Text style={Styles.screenTitle}>Modal</Text>
      {navigation && (
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      )}
    </View>
  );
};

export default Modals;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
