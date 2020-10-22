import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function Items({ itemName, stateChanger, currentIndex }) {

    function handleDelete() {
        console.log('DELETED');
        stateChanger(currentIndex);
    }

    return (
        <View style={styles.container} >

            <View style={styles.itemAndBtnContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{itemName}</Text>

                </View>

                <View style={styles.deleteContainer}>
                    <TouchableOpacity style={styles.deleteBtn} onPress={handleDelete} activeOpacity={.7}>
                        <Image style={styles.delImg} source={require('../assets/Trash.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = new StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    itemAndBtnContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '80%',
        left: '7.5%',
        padding: '1%',
        margin: '1%',
        justifyContent: 'center',
        alignItems: 'left',
    },

    itemTextContainer: {
        flex: 10,
        height: '100%',
        backgroundColor: '#cad4d1',
        justifyContent: 'center',
        alignItems: 'left',
        marginRight: '5%',
        paddingLeft: '2%',

    },

    deleteContainer: {
        flex: .5,
    },

    deleteBtn: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    itemText: {
        fontSize: 20,
    },

    deleteText: {
        fontSize: 20,
    },

    delImg: {
        height: '100%',
        width: '100%',
    }
})