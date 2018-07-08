import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import Homescreen from './screens/Homescreen'
import Mapscreen from './screens/Mapscreen'
import Profilescreen from './screens/Profile'
import { Ionicons } from '@expo/vector-icons';

import { Container, Content, Text, Header, Title, Button, Icon, Card, CardItem, Thumbnail, Fab, Footer, FooterTab } from 'native-base';
import CafeDetail from './screens/CafeDetail';

export default class App extends React.Component {

  constructor() {
    super();
  }
  render() {
    return (
      <BottomBar />

    );
  }
}

const BottomBar = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Homescreen,
        navigationOptions: ({ navigation }) => ({
          title: "Acties",
        }),
      },
      Details:CafeDetail
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Acties",
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-pricetags-outline" size={32} color={'#4080ff'} />
      )
    }),
  },
  Map: {
    screen: createStackNavigator({
      Map: {
        screen: Mapscreen,
        navigationOptions: ({ navigation }) => ({
          title: "Kaart",
        }),
      }
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Kaart",
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-compass-outline" size={32} color={'#4080ff'} />
      )
    }),
  },
  Profile: {
    screen: createStackNavigator({
      Profile: {
        screen: Profilescreen,
        navigationOptions: ({ navigation }) => ({
          title: "Mijn profiel",
        }),
      }
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Profiel",
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-contact-outline" size={32} color={'#4080ff'} />
      )
    }),
  },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

