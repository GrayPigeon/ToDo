import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Title() {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.title}>ToDo</Text>
        </View>
    )

}

const styles = new StyleSheet.create({
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
})