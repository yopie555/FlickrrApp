import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import ImageCard from '../components/ImageCard';

const homePage = () => (
    <View style={styles.container}>
        <View styles={styles.container1}>
            <Image
                source={{ uri: 'https://combo.staticflickr.com/pw/images/favicons/favicon-228.png' }}
                style={styles.logo}
            />
            <Text>
                Flicker
            </Text>
        </View>
        <ImageCard />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
        width: '100%'
    },
    container1: {
        flexDirection: 'row',
        width: '10%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    logo: {
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 8,
    }
})
export default homePage;
