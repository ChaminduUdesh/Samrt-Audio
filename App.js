import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}} >
        <Text style={{ color: 'blue', fontSize: 30, textAlign: 'center', padding: 5}}>Tea Small State Owners</Text>
        <View style={[styles.container, {flexDirection:'column'}]}>
          <View style={{flex: 1, backgroundColor: '#00e8d4', margin: 5}} >
            <Text style={styles.welcome}>Divition</Text>
          </View>
        <View style={{flex: 1, backgroundColor: '#e8e5c7', margin: 5}} >
          <Text style={styles.welcome}>User Info</Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#e81483', margin: 5}} >
          <Text style={styles.welcome}>Settings</Text>
        </View>
        <View style={{flex:1, backgroundColor:'#8b00e8'}} >
          <Text style={styles.welcome}>Other Features</Text>
          <View style={styles.content} >
          <View style={{flex:1, flexDirection: 'row'}}>
            <View
              style={[styles.box, { backgroundColor: "#d6a5e8" }]}
            />
            <View
              style={[styles.box, { backgroundColor: "#bc66e8" }]}
            />
            <View
              style={[styles.box, { backgroundColor: "#b12be8" }]}
            />
          </View>
         </View>
        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',
    margin: 10
  },
  container: {
    flex: 1,
    padding: 20
  },
  content: {
    flex: 1,
    alignItems: 'flex-end',
    alignContent:"flex-end",
    justifyContent:'flex-end',
    backgroundColor: '#8b00e8',
    margin: 5
  },
  box: {
    width: 50,
    height: 50,
  }
})
