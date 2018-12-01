import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './aplication/components/AppButton';
import PreLoader from './aplication/components/PreLoader';
import BackgroundImage from './aplication/components/BackgroundImage';
import Start from './aplication/screens/Start';
import firebaseConf from './aplication/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import GuestNavigation from './aplication/navigations/guest';
export default class App extends React.Component {
  render() {
    return (
     
     <GuestNavigation/>

     
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
