import React, { Component } from 'react';
import { Text, AppRegistry } from "react-native";
import Header from './src/Header';

const App =() => ( 
    <Header/> 
    )

AppRegistry.registerComponent('albums', () => App)