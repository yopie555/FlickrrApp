import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPictureAction, favpic, savepic, delpic } from '../action/pictureAction'
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
        await dispatch(getPictureAction()).then(() => setLoading(false));
    }
    useEffect(() => {
        dispatch(savepic())
        pictures()
    }, [])

    const picture = useSelector((state) => state.photo);

    if (loading == true) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size="large" color="#0063dc" />
            </View>
        );
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
                            fav={() => dispatch(favpic(item))}
                            del={() => dispatch(delpic(item))}
                            picfav={picture.fav}
                            navigation={() => navigation.navigate('detail', { link: item.link })}
                        />
                    )
                }}
                keyExtractor={(item) => item.author_id}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#313131',
    },
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
export default HomePage;
