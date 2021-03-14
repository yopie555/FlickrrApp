import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPictureAction } from '../action/pictureAction'
import ImageCard from '../components/ImageCard';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const HomePage = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const pictures = async () => {
        await dispatch(getPictureAction())
        setLoading(false)
    }
    useEffect(() => {
        pictures()
    }, [])
    const picture = useSelector((state) => state.picture);

    if(loading){
        return(<ActivityIndicator color="#FFFFFF"/>)
    }
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
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={pictures}
                    />
                }
                data={picture.result}
                renderItem={({ item }) => {
                    return (
                        <ImageCard
                            image={item.media.m}
                            title={item.title}
                            author={item.author}
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
        paddingVertical: 8
    },
    logo: {
        margin: 5,
        height: 30,
        width: 30,
        borderRadius: 8,
    }
})
export default HomePage;
