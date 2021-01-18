import React from 'react';
import {Button, StyleSheet} from 'react-native';

const CustomHeaderTitle = (props) => {
  console.log(`Custom header title props: ${JSON.stringify(props)}`);
  return <Button title={props.title} />;
};

export default CustomHeaderTitle;

const styles = StyleSheet.create({});
