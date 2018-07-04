import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Homescreen from './screens/Homescreen'
import Mapscreen from './screens/Mapscreen'
import { Ionicons } from '@expo/vector-icons';


export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Homescreen,
    navigationOptions: () => ({
      showIcons:true,
      tabBarIcon: () => (
        <Ionicons name="ios-home" size={32} color={'#4080ff'} />
      )
    })
  },
  Map: { screen: Mapscreen, 
    navigationOptions: () => ({
      showIcons:true,
      tabBarIcon: () => (
        <Ionicons name="ios-compass" size={32} color={'#4080ff'} />
      )
    })}
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
