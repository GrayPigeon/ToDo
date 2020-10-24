import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function DeleteBtn({ changeRemoveState, currentIndex }) {
    const handleDelete = () => changeRemoveState(currentIndex);

    return (
        <View>
            <TouchableOpacity onPress={handleDelete} activeOpacity={.7}>
                <Text style={styles.delTxt}>&times;</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = new StyleSheet.create({
    delTxt: {
        fontSize: 40,
    },
})