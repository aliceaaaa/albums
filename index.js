import React, {Fragment} from 'react';
import { View, AppRegistry } from "react-native";
import Header from './src/Header';
import AlbumList from './src/AlbumList';

const App =() => ( 
    <View style={{ flex : 1 }}>
    <Header title={"Albums"}/>
    <AlbumList/>
    </View>
    )

AppRegistry.registerComponent('albums', () => App)