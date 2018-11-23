import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './aplication/components/AppButton';
import PreLoader from './aplication/components/PreLoader';
import BackgroundImage from './aplication/components/BackgroundImage';

export default class App extends React.Component {
  render() {
    return (
     
     <BackgroundImage
     source={require('./assets/images/login-bg.jpg')}
     >
     
     <Text style={{color:'#fff', marginTop:100}}>Hola</Text>
     </BackgroundImage>

     
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
