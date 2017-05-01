//Index.android,js - place code in here.

//Import a library to help create a component
import React from 'react';
//React knows how a component should behave
// Knows how to take a bunch of components and make
//them work together.
import { AppRegistry, View } from 'react-native';// only import Text from the react-native library.
//React-Native Knows how to take output from a component and place it
//on a device screen.
import Header from './src/components/header';
//"./" means start at current directory.
//.js files do not need extension.
import AlbumList from './src/components/AlbumList';

//Create a Component
//root component
const App = () => {
  //() is a function
  //=> defines the function
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};
// or
// const App = () => ( <Text> Some Text </Text> );

//Render it to the device
//Only 'root' component uses AppRegistry.
AppRegistry.registerComponent('albums', () => App)
//Need to at least register one component to the application.
//() => implicit function the returns the App Component.
