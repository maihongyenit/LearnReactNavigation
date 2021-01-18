import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import Styles from '../../style/Styles';

const Home = ({navigation, route}) => {
  const {isActivityResult, data} = (route && route.params) || {};
  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Home Screen</Text>
      {/* OnActivity result */}
      {isActivityResult && data && (
        <Text style={Styles.screenText}>{`OnActivity result: ${JSON.stringify(
          data,
        )}`}</Text>
      )}
      {/* Navigate */}
      <Button
        title="Detail"
        onPress={() => {
          navigation.navigate('Detail', {
            isActivityResult: false,
            data: 'Setting data',
            name: 'Detail Screen',
          });
        }}
      />
      {/* Navigate with data */}
      <Button
        title="Setting"
        onPress={() => {
          navigation.navigate('Setting', {
            isActivityResult: false,
            data: 'Setting data',
          });
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
