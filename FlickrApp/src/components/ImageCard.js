import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageCard = (props) => {
    const [aspectRatio, setAspectRatio] = useState(1 / 2)
    const [realHeight, setRealHeight] = useState(0)
    const [realWidth, setRealWidth] = useState(0)
    let srcheight = 0
    let srcwidth = 0
    const maxHeight = Dimensions.get('window').height;
    const maxWidth = Math.round(Dimensions.get("screen").width);

    const loadImageSize = (imageUrl) => {
        return new Promise((resolve, reject) => {
            Image.getSize(imageUrl, (width, height) => {
                resolve({ width, height })
            }, reject)

        })
    }
    return (
        <View style={styles.container1}>
            <TouchableOpacity
                onPress={() => props.navigation()}
            >
                <Image
                    source={{ uri: props.image }}
                    onLoadStart={async (e) => {
                        const { height, width } = await loadImageSize(props.image)
                        setRealHeight(height)
                        setRealWidth(width)
                        srcheight = height
                        srcwidth = width
                        const ratio = Math.min(maxWidth / srcwidth, maxHeight / srcheight);
                        setAspectRatio(ratio)
                    }}
                    style={{ width: (realWidth - 2) * aspectRatio, height: (realHeight) * aspectRatio, alignSelf: 'center', }}
                />
            </TouchableOpacity>
            <View style={styles.container2}>
                <Icon2 name="account-circle" size={35} style={{ color: '#0063dc', marginRight: 3 }} />
                <View style={styles.container3}>
                    <Text style={styles.text1}
                        ellipsizeMode="tail"
                        numberOfLines={2}
                    >{props.title}</Text>
                    <Text style={styles.text2}>{props.author}</Text>
                </View>
                {props.picfav.length != 0 && props.picfav.find(x => x.media.m === props.image) ?
                    <TouchableOpacity
                        onPress={() => props.del()}
                    >
                        <Icon name="like1" size={30} style={{ color: '#FF0084' }} />
                    </TouchableOpacity> :
                    <TouchableOpacity
                        onPress={() => props.fav()}
                    >
                        <Icon name="like1" size={30} style={{ color: '#FFFFFF' }} />
                    </TouchableOpacity>
                }
            </View>
        </View >
    )
}

export default ImageCard

const styles = StyleSheet.create({
    container1: {
        marginBottom: 10,
        padding: 2,
        width: '100%',
    },
    container2: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: 7,
        paddingVertical: 10,
    },
    container3: {
        paddingHorizontal: 3
    },
    text1: {
        color: '#FFFFFF',
        fontSize: 18,
        width: 310,
    },
    text2: {
        color: '#FFFFFF',
        width: 310,
    },
})