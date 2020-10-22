import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Platform } from 'react-native';

export default function AddItems({ todos, funcSetTodos }) {
    const [newItem, setNewItem] = useState('');
    let textInput = '';

    const handleSubmit = () => {
        newItem !== '' && funcSetTodos(todos.concat(newItem));
        textInput.clear();
    }

    const handleInputChange = (e) => setNewItem(e.target.value);

    return (
        <View style={styles.container}>

            {Platform.OS == 'ios' || Platform.OS == 'android'
                ? <TextInput style={styles.searchBox} onChange={text => setNewItem(text)} placeholder='New Item'></TextInput>
                : <TextInput ref={input => { textInput = input }} style={styles.searchBox} onChange={handleInputChange} placeholder='New Item'></TextInput>
            }

            <TouchableOpacity style={styles.addBtn} onPress={handleSubmit} activeOpacity={.7}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: '2%',
        left: '4%',
        height: '8%',
        width: '90%',
        marginTop: '4%',
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
})