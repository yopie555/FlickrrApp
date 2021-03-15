import { BottomTabBar } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { delpic } from '../action/pictureAction';

import ImageCard from '../components/ImageCard'

const FavPage = ({ navigation }) => {
    const picture = useSelector((state) => state.photo);

    const dispatch = useDispatch();
    console.log('fav', picture);

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://combo.staticflickr.com/pw/images/favicons/favicon-228.png' }}
                />
                <Text style={{ color: '#FFFFFF' }}>
                    Flicker
                </Text>
            </View>
            <FlatList
                data={picture.fav}
                keyExtractor={(item) => item.author_id}
                renderItem={({ item }) => {
                    return (
                        <ImageCard
                            image={item.media.m}
                            title={item.title}
                            author={item.author}
                            fav={() => dispatch(favpic(item))}
                            del={() => dispatch(delpic(item))}
                            picfav={picture.fav}
                            navigation={() => navigation.navigate('detail', { link: item.link })}
                        />
                    )
                }}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#313131",
        width: '100%',
        alignItems: 'center',
    },
    container1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 3
    },
    logo: {
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 8,
    }
})
export default FavPage;
