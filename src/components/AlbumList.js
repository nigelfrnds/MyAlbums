import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'; // used to fetch data
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  //initial state
  state = { albums: [] };
  // response.data refers to the key of Data in the JSON object
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data}));
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
      ); //map() is an array helper
  }

  render(){
    console.log(this.state);
    //must add a style of flex 1 to scroll view!!, check index.android.js
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
