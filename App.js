import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import Items from './components/Items';


export default function App() {
  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [change, setChange] = useState(-1);

  function handleSubmit() {
    newItem !== '' && setTodos(todos.concat(newItem));
  }

  function handleInputChange(e) {
    setNewItem(e.target.value);
  }

  function changeState(val) {
    setChange(val);
  }


  return (
    <View style={styles.container}>

      <View style={styles.box}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>ToDo</Text>
        </View>


        <View style={styles.searchAndBtnContainer}>

          <TextInput style={styles.searchBox} onChange={handleInputChange} placeholder='New Item'></TextInput>
          {/* <TextInput style={styles.searchBox} onChange={text => setNewItem(text)} placeholder='New Item'></TextInput> */}

          <TouchableOpacity style={styles.addBtn} onPress={handleSubmit} activeOpacity={.7}>

            <Text>Add</Text>
          </TouchableOpacity>

        </View>

        {todos.map((cur, i) => {
          if (i == change) {
            todos.splice(i, 1);
            setChange(-1);
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

  title: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: 'Arial, Helvetica, sans-serif',
    alignSelf: 'center',
    margin: 15,
  },

  titleContainer: {
    backgroundColor: '#619b8a',
    padding: 8,
  },

  searchBox: {
    backgroundColor: 'white',
    padding: 10,
    flex: 3,
    height: '100%',
    marginRight: '10%',
    borderRadius: 10,
  },

  addBtn: {
    backgroundColor: '#fb8500',
    width: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  searchAndBtnContainer: {
    flexDirection: 'row',
    margin: '2%',
    left: '4%',
    height: '8%',
    width: '90%',
    marginTop: '4%',
  }
});
