import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import Album from "./Album"

class AlbumList extends Component {

    state = {
        albums: []
    };
  
componentDidMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({albums: response.data}));
    }

  render() {
    console.log(this.state.albums)
    return (
        <ScrollView>
        {this.state.albums.map(album =>(
            <Album key={album.title} album={album} />
        ))}
        </ScrollView>
         )
    }
}

export default AlbumList;