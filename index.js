// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create a component
const App = () => {
  return (
    <Text>Hello world</Text>
  );
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);