import React from 'react';
import {Text, View} from "react-native";
import Card from './Card'
import CardSection from './CardSection';

export default ({album}) => {
    return(
    <Card>
        <CardSection>
        <Text>{album.title}</Text>
        </CardSection>
    </Card>
    )
}