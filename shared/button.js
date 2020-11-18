import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function FlatButton ({ text, onPress }) {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>        
    )
}

const styles = StyleSheet.create({
    button: { 
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: 'cyan'
    },
    buttonText: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
    }
})