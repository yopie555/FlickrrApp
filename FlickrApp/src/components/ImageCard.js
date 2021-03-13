import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const Header = () => (
    <View style={styles.container}>
        <Image 
            source={{ uri: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1605068859/one-piece-roronoa-zoro-grin-678b5a11aa2ca2db330e3b05467e3a7f_600x400_n52fww.jpg'}}
            style={styles.image}
        />
        <View style={styles.container2}>
                <Icon2 name="account-circle" size={45} style={{color: '#FFFFFF'}} />
                <View style={styles.container3}>
                    <Text style={styles.text1}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >abang sesat</Text>
                    <Text style={{color:'#ffffff'}}>Roronoa Zoro</Text>
                </View>
            </View>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    image: {
        margin:10,
        height: 200,
        width: '100%',
    },
    container2: {
        flexDirection: 'row',
        margin: 7,
    },
    container3: {
        marginLeft: 7,
    },
    text1: {
        fontSize: 22,
        width: 310,
        color: '#ffffff'
    },
})
export default Header;
