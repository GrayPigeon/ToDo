import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import EachItem from './EachItem';
import Clear from './Clear';

export default function AddItems() {
    const [newItem, setNewItem] = useState('');
    const [todos, setTodos] = useState([]);
    const [remove, setRemove] = useState(-1);

    const funcSetRemove = val => setRemove(val)
    const funcEmptyTodos = () => setTodos([])

    let textInput = '';

    const handleSubmit = () => {
        newItem !== '' && setTodos(todos.concat(newItem));
        textInput.clear();
    }

    const handleInputChange = (e) => setNewItem(e.target.value);

    return (
        <View
            style={Platform.OS == 'ios' || Platform.OS == 'android'
                ? styles.mobileContainer
                : styles.webContainer}
        >
            <View style={styles.addTodoContainer}>

                {Platform.OS == 'ios' || Platform.OS == 'android'
                    ? <TextInput style={styles.searchBox} onChange={text => setNewItem(text)} placeholder='New Item'></TextInput>
                    : <TextInput ref={input => { textInput = input }} style={styles.searchBox} onChange={handleInputChange} placeholder='New Item'></TextInput>
                }

                <TouchableOpacity style={styles.addBtn} onPress={handleSubmit} activeOpacity={.7}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.itemsContainer}>
                {todos.map((cur, i) => {
                    if (i == remove) {
                        todos.splice(i, 1);
                        setRemove(-1);
                    }
                    return <EachItem changeRemoveState={funcSetRemove} itemName={cur} currentIndex={i} />
                })}
            </View>

            <Clear style={styles.clearText} funcEmptyTodos={funcEmptyTodos} />
        </View>
    )
}

const styles = StyleSheet.create({
    mobileContainer: {
        width: '100%',
        height: '100%',
    },

    webContainer: {
        height: '100%',
        width: '100%',
    },

    addTodoContainer: {
        flexDirection: 'row',
        margin: '2%',
        left: '4%',
        height: '8%',
        width: '90%',
        marginTop: '4%',
    },

    searchBox: {
        borderWidth: 0,
        outline: 0,
        padding: 10,
        flex: 3,
        height: '100%',
        marginRight: '10%',
        borderBottomWidth: 4,
        borderBottomColor: '#f25f5c',
        outline: 0,
    },

    addBtn: {
        backgroundColor: '#f25f5c',
        width: '20%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    itemsContainer: {
        flexDirection: 'column',
    },
})