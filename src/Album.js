import React from 'react';
import {Text, View} from "react-native"

const styles = {
    textStyle: {
        fontSize: 12,
        color: "black"
    },
    viewStyle: {
        backgroundColor: '#CEC8C7',
        height: 120,
        padding: 8,
        margin: 8,
    }
}

export default ({album}) => {
    const { textStyle, viewStyle } = styles
    return(
    <View style={ viewStyle }>
        <Text >title: {album.title} </Text>
        <Text>artist: {album.artist}</Text>
        <Text>url: {album.url}</Text>
        <Text>image: {album.image}</Text>
        <Text>thumb: {album.thumbnail_image}</Text>
    </View>
    )
}