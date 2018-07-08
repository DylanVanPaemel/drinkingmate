import React from 'react';
import { StyleSheet, Text, View, Container } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Homescreen from './screens/Homescreen';
import Mapscreen from './screens/Mapscreen';
import CafeDetail from './screens/CafeDetail'
import Profile from './screens/Profile'
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

//de stack navigator om naar andere schermen te navigeren
const RootStack = createStackNavigator(
  {

    Home: {
      screen: Homescreen,
      navigationOptions: ({ navigation }) => ({
        title: "Acties",
      }),
    },
    Map: {
      screen: Mapscreen,
      navigationOptions: ({ navigation }) => ({
        title: "Kaart",
        headerLeft: null
      }),
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => ({
        title: "Mijn Profiel",
        headerLeft: null
      }),
    },
    Details:CafeDetail

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

