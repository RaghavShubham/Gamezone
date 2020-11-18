import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const  Header = ({ navigation, title }) => {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <ImageBackground style={styles.header} source={require('../assets/game_bg.png')} >
            <MaterialIcons name="menu" size={28} onPress={openMenu} color="#333" style={styles.icon} />
            <View style={styles.headerContent}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                <Text style={styles.headerText}>{title}</Text>
            </View>        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop:20,
        height: 60 ,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerContent: {
        flexDirection: 'row'
    },
    headerImage: {
        height: 24,
        width: 24,
        marginHorizontal: 10,
    }
})