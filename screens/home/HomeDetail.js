import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Styles from '../../style/Styles';

const HomeDetail = ({navigation, route}) => {
  useFocusEffect(() => {
    console.log('HomeDetail is focus');
  });

  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Home Screen 2</Text>
    </View>
  );
};

export default HomeDetail;

const styles = StyleSheet.create({});
