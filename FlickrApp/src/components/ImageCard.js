import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ImageCard = (props) => {
    const navigation = useNavigation();
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
            <View style={styles.container2}>
                <Icon2 name="account-circle" size={45} style={{ color: '#FFFFFF' }} />
                <View style={styles.container3}>
                    <Text style={styles.text1}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >{props.title}</Text>
                    <Text style={styles.text2}>{props.author}</Text>
                </View>
            </View>
        </View>
    )
}

export default ImageCard

const styles = StyleSheet.create({
    container1: {
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: null,
        aspectRatio: 1.78,
    },
    container2: {
        flexDirection: 'row',
        margin: 7,
    },
    container3: {
        marginLeft: 7,
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 22,
        width: 310,
    },
    text2: {
        color: '#FFFFFF',
        width: 310,
    },
})