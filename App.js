import React from 'react';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import AddItems from './components/AddItem';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>

      <View
        style={Platform.OS == 'ios' || Platform.OS == 'android' ? styles.mobileBox : styles.webBox}
      >
        <Title />
        <AddItems />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
  },

  webBox: {
    backgroundColor: '#50514f',
    height: '75%',
    width: '40%',
  },

  mobileBox: {
    backgroundColor: '#50514f',
    height: '100%',
    width: '100%',
  }
});
