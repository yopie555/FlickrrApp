import React, { useState, useEffect } from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import MiniCard from '../components/MiniCard'
import { searchImageAction } from '../action/searchAction'

const SearchScreen = ({navigation}) => {
    const [value, setValue] = useState(null)
    const dispatch = useDispatch();
    const searchImage = () => {
        dispatch(searchImageAction(value))
    }
    const search = useSelector((state) => state.search);
    
    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <TextInput
                    style={styles.txtsearch}
                    onChangeText={(value) => setValue(value)}
                    value={value}
                />
                <Icon
                    name="ios-send-sharp"
                    size={35}
                    style={styles.icon}
                    onPress={() => searchImage()}
                />
            </View>
            <FlatList
                data={search.result}
                keyExtractor={(item) => item.author_id}
                renderItem={({ item }) => {
                    return (
                        <MiniCard
                            image={item.media.m}
                            title={item.title}
                            author={item.author}
                            navigation={() => navigation.navigate('detail', { link: item.link })}
                        />
                    )
                }}
            />
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#313131'
    },
    container2: {
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5,
        backgroundColor: "#e6e6e6"
    },
    txtsearch: {
        flex: 1,
        paddingHorizontal: 10,
        // width: "90%",
    },
    icon: {
        margin: 5,
        color: '#0063dc'
    }
})