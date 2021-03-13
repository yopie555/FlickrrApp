import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';

const homePage = () => (
    <View style={styles.container}>
        <View styles={styles.container1}>
            <Image
                source={{ uri: 'https://combo.staticflickr.com/pw/images/favicons/favicon-228.png' }}
                style={styles.logo}
            />
        </View>
        <Text>homePage</Text>
        <Header />
        <Body />
        <Footer />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
        width: '100%'
    },
    container1: {
        width: '10%',
        borderBottomWidth: 1,
        borderBottomColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    logo: {
        margin: 5,
        height: 40,
        width: 40,
        borderRadius: 20,
    }
})
export default homePage;
