import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeleteBtn from '../components/DeleteBtn';

export default function Items({ itemName, changeRemoveState, currentIndex }) {
    return (
        <View style={styles.container} >

            <View style={styles.itemAndBtnContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{itemName}</Text>
                </View>

                <DeleteBtn changeRemoveState={changeRemoveState} currentIndex={currentIndex} />

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

    itemText: {
        fontSize: 20,
    },
})