import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const MiniCard = (props) => {
    console.log('props', props.image)
    return (
        <View style={styles.container1}>
            <TouchableOpacity
                onPress={() => props.navigation()}
            >
                <Image
                    source={{ uri: props.image }}
                    style={styles.image}
                />
            </TouchableOpacity>
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
