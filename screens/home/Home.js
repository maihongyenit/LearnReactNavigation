import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import Styles from '../../style/Styles';
import {LoggingContext} from '../../components/Context';

const Home = ({navigation, route}) => {
  const {isActivityResult, data} = (route && route.params) || {};
  const {setIsLogging} = useContext(LoggingContext);

  useFocusEffect(() => {
    console.log('Home screen is focus');
  });

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
      {/* Fall back to Welcome */}
      <Button
        title="Sign Out"
        onPress={() => {
          setIsLogging(false);
        }}
      />
      {/* HomeDetail */}
      <Button
        title="HomeDetail"
        onPress={() => {
          navigation.navigate('HomeDetail');
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
