import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function Items({ itemName }) {
    return (
        <View style={styles.container}>

            <View style={styles.itemAndBtnContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{itemName}</Text>

                </View>

                <View style={styles.deleteContainer}>
                    <TouchableOpacity style={styles.deleteBtn} onPress={() => console.log('deleted')}>
                        <Text style={styles.deleteText}>Delete</Text>
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
        left: '5%',
        padding: '2%',
        margin: '1%',
        justifyContent: 'center',
        alignItems: 'left',
    },

    itemTextContainer: {
        flex: 4,
        height: '100%',
        backgroundColor: '#cad4d1',
        justifyContent: 'center',
        alignItems: 'left',
        marginRight: '5%',
        paddingLeft: '2%',

    },

    deleteContainer: {
        flex: 1,
        backgroundColor: 'red',
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
    }
})