import React from 'react';
import { StyleSheet, Text, View, Container } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Homescreen from './screens/Homescreen'
import Mapscreen from './screens/Mapscreen'
import CafeDetail from './screens/CafeDetail'
import { Ionicons } from '@expo/vector-icons';


export default class App extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
        <RootStack />

    );
  }
}

const RootStack = createStackNavigator(
  {
    home:Homescreen,
    Details: CafeDetail,
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
