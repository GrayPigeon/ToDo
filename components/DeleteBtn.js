import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, useState } from 'react-native';

export default function DeleteBtn({ stateChanger, currentIndex }) {
    const handleDelete = () => stateChanger(currentIndex);

    return (
        <View style={styles.deleteContainer}>
            <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete} activeOpacity={.7}>
                <Image style={styles.delImg} source={require('../assets/Trash.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}

const styles = new StyleSheet.create({
    delImg: {
        height: '100%',
        width: '100%',
    },

    deleteContainer: {
        flex: .5
    },

    deleteBtn: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})