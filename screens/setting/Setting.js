import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import Styles from '../../style/Styles';

const Setting = ({appData, navigation, route}) => {
  const {params} = route;
  return (
    <View style={Styles.container}>
      <Text style={Styles.screenTitle}>Setting Screen</Text>
      {/* Way to pass props to screen */}
      {appData && (
        <Text style={Styles.screenText}>{`appData: ${JSON.stringify(
          appData,
        )}`}</Text>
      )}
      {/* Params */}
      {params && (
        <Text style={Styles.screenText}>{`params: ${JSON.stringify(
          params,
        )}`}</Text>
      )}
      {/* Push */}
      <Button
        title="Add more Setting"
        onPress={() => {
          navigation.push('Setting');
        }}
      />
      {/* Back */}
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      {/* OnActivity result */}
      <Button
        title="Back to Home with data"
        onPress={() => {
          navigation.navigate('Home', {isActivityResult: true, data: 'data'});
        }}
      />
      {/* Pop to top */}
      <Button
        title="Pop to top"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});

Setting.propTypes = {
  appData: PropTypes.object.isRequired,
};
