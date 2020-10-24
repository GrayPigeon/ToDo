import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import AddItems from './components/AddItem';
import Items from './components/Items';
import Title from './components/Title';
import { configureStore } from '@reduxjs/toolkit';

export default function App() {
  const [remove, setRemove] = useState(-1);
  const [todos, setTodos] = useState([]);

  const funcSetTodos = (val) => setTodos(val);
  const changeRemoveState = (val) => setRemove(val);

  // const addTodo = payload => {
  //   return {
  //     type: 'todos/add',
  //     payload: payload
  //   }
  // }

  // let initial = [];

  // const addTodoReducer = (state = initial, action) => {
  //   let copy = [...initial]
  //   return (
  //     copy.push(action.payload)
  //   )
  // }

  // const store = configureStore({ reducer: addTodoReducer })
  // store.dispatch(addTodo);
  // console.log(store.getState())


  return (

    < View style={styles.container} >

      <View style={styles.box}>

        <Title />
        <AddItems todos={todos} funcSetTodos={funcSetTodos} />


        {/* <View> */}
        {todos.map((cur, i) => {
          if (i == remove) {
            todos.splice(i, 1);
            setRemove(-1);
          }
          return <Items changeRemoveState={changeRemoveState} itemName={cur} currentIndex={i} />;
        })}
        {/* </View> */}

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
