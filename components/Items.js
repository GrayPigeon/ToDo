import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Items({ itemName }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{itemName}</Text>
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        backgroundColor: '#cad4d1',
        height: '9%',
        width: '80%',
        left: '5%',
        padding: '1%',
        margin: '1%',
        justifyContent: 'center',
        alignItems: 'left',
    },

    text: {
        fontSize: 20,
    }
})