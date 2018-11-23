import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './aplication/components/AppButton';
import PreLoader from './aplication/components/PreLoader';

export default class App extends React.Component {
  render() {
    return (
     
      <PreLoader/>

     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
