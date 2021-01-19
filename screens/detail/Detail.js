import React, {useState, useLayoutEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {HeaderBackButton} from '@react-navigation/stack';

import Styles from '../../style/Styles';

const Detail = ({navigation}) => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (navigation) {
      navigation.setOptions({
        title: 'Detail Updated',
        headerBackTitle: 'Back',
        headerRight: () => (
          <Button
            title="Update"
            onPress={() => {
              setCount((c) => c + 1);
            }}
          />
        ),
        headerLeft: () => (
          <HeaderBackButton
            onPress={() => {
              alert('Back btn pressed');
            }}
          />
        ),
      });
    }
  }, [navigation]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Detail Screen</Text>
      {/* Count */}
      <Text style={Styles.screenText}>{count}</Text>
      <Button
        title="Open modal"
        onPress={() => {
          navigation.navigate('Modals');
        }}
      />
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
