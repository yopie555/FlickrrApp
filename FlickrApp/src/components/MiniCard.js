import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const MiniCard = (props) => {
    console.log('props', props.image)
    return (
        <View style={styles.container1}>
            <Image
                source={{ uri: props.image }}
                style={styles.image}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container1: {
        marginVertical: 5,
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 270,
    },
})

export default MiniCard;
