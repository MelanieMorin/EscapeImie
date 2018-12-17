import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image resizeMode='contain' style={{flexShrink:1}} source={require ("./assets/escape.png")}></Image>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundSize:contain,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
