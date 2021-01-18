import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import Styles from '../../style/Styles';

const Detail = ({navigation}) => {
  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Detail Screen</Text>
      {/* Update option for route */}
      {navigation && (
        <Button
          title="Update option"
          onPress={() =>
            navigation.setOptions({
              title: 'Detail Updated',
            })
          }
        />
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
