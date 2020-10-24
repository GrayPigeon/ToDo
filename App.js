import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AddItems from './components/AddItem';
import Title from './components/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
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

  box: {
    backgroundColor: '#8ecae6',
    height: '100%',
    width: '100%',
  },
});
