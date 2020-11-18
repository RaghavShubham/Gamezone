import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'Raleway-SemiBold',
        fontSize: 17,
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 6,
        padding: 10,
        fontSize: 18,
    },
    errorText: {
        fontSize: 12,
        paddingRight: 10,
        textAlign: 'right',
        marginTop: 6,
        color: 'crimson',
        marginBottom: 15,
    }
});

export const images = {
    ratings : {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}