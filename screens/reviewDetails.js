import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { globalStyles, images } from '../styles/globalStyles'
import Card from '../shared/card';

export default function ReviewDetails({ navigation }) {

    const rating = navigation.getParam('rating');

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{ navigation.getParam('title') }</Text>
                <Text>{ navigation.getParam('body') }</Text>
                <View style={styles.rating}>
                    <Text>GameXone Rating: </Text>
                    <Image source={images.ratings[rating]} />
                </View>
            </Card>            
        </View>
    )   
}

const styles = StyleSheet.create({
    rating: {
        marginTop: 16,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#eee',
    }
})