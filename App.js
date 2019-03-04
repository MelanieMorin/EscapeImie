import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableHighlight  } from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Finger } from "./renderers";
import { MoveFinger } from "./systems"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Image resizeMode="contain" style={{flexShrink:1}} source={require ("./assets/escape.png")}></Image>
      <TouchableOpacity><Text>Toucher pour commencer</Text></TouchableOpacity>
      </View>
      <GameEngine
        style={styles.container}
        systems={[MoveFinger]}
        entities={{
          1: { position: [40,  200], renderer: <Finger />}, //-- Notice that each entity has a unique id (required)
          2: { position: [100, 200], renderer: <Finger />}, //-- and a renderer property (optional). If no renderer
          3: { position: [160, 200], renderer: <Finger />}, //-- is supplied with the entity - it won't get displayed.
          4: { position: [220, 200], renderer: <Finger />},
          5: { position: [280, 200], renderer: <Finger />}
        }}>

        <StatusBar hidden={true} />

      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
