import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log('hi');
  }
  render() {
      return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

export default AlbumList;
