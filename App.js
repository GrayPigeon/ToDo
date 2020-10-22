import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import AddItems from './components/AddItem';
import Items from './components/Items';
import Title from './components/Title'

export default function App() {
  const [remove, setRemove] = useState(-1);
  const [todos, setTodos] = useState([]);

  const funcSetTodos = (val) => setTodos(val);
  const changeState = (val) => setRemove(val);

  return (
    <View style={styles.container}>

      <View style={styles.box}>

        <Title />
        <AddItems todos={todos} funcSetTodos={funcSetTodos} />


        {todos.map((cur, i) => {
          if (i == remove) {
            todos.splice(i, 1);
            setRemove(-1);
          }
          return <Items stateChanger={changeState} itemName={cur} currentIndex={i} />;
        })}

      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    backgroundColor: '#8ecae6',
    height: '100%',
    width: '100%',
  },
});
