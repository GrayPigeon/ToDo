import React from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function Items({ itemName }) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{itemName}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Here</Text>
                </TouchableOpacity>
            </View>
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