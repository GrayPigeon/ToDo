import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeleteBtn from './DeleteBtn';

export default function EachItem({ itemName, changeRemoveState, currentIndex }) {
    return (
        <View style={styles.container} >

            <View style={styles.itemAndBtnContainer}>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.itemText}>{itemName}</Text>
                </View>
            </View>

            <View style={styles.closeContainer}>
                <DeleteBtn style={styles.x} changeRemoveState={changeRemoveState} currentIndex={currentIndex} />
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
        paddingRight: 0,
        marginRight: 0
    },

    itemTextContainer: {
        flex: 10,
        height: '100%',
        backgroundColor: '#b8b8b8',
        justifyContent: 'center',
        alignItems: 'left',
        marginRight: 0,
        paddingLeft: '2%',
    },

    itemText: {
        fontSize: 20,
    },

    closeContainer: {
        height: '100%',
        width: '7.5%',
    },
})