import {View, Text} from 'react-native';
import React from 'react';
import Story from './src/Story';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Story />
    </View>
  );
}
