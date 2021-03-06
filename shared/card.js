import React from 'react';
import { View, StyleSheet, ImagePropTypes } from 'react-native';

export default function Card(props) {
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        shadowOffset: { width: 1, height: 1},
        backgroundColor: '#fff',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        paddingHorizontal: 6,
        paddingVertical: 10,
    }
})