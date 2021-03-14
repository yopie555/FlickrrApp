import React from 'react';
import { WebView } from 'react-native-webview'

const DetailPage = ({ route }) => {
    return (
        <WebView
            source={{ uri: route.params.link }}
        />
    );
}

export default DetailPage;
