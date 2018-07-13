import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Homescreen from "./screens/Homescreen";
import Mapscreen from "./screens/Mapscreen";
import { Ionicons } from "@expo/vector-icons";
import CafeDetail from "./screens/CafeDetail";
import { Root } from "native-base";
import { Font, AppLoading } from "expo";
import Login from "./screens/Loginscreen";
import Profile from "./screens/Profilescreen";
import GiftedFormModal from "./screens/GiftedFormModal";

class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Root>
        <BottomBar />
      </Root>
    );
  }
}

const BottomBar = createBottomTabNavigator({
  Home: {
    screen: createStackNavigator({
      Home: {
        screen: Homescreen,
        navigationOptions: ({ navigation }) => ({
          title: "Acties"
        })
      },
      Details: CafeDetail
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Acties",
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-pricetags-outline" size={32} color={"#4080ff"} />
      )
    })
  },
  Map: {
    screen: createStackNavigator({
      Map: {
        screen: Mapscreen,
        navigationOptions: ({ navigation }) => ({
          title: "Kaart"
        })
      }
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Kaart",
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-compass-outline" size={32} color={"#4080ff"} />
      )
    })
  },
  Login: {
    screen: createStackNavigator({
      Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => ({
          title: "Mijn Profiel",
          gesturesEnabled: false,
        }),
      },
      Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
          title: "Mijn Profiel",
          headerLeft:null
        }),
      },
      Modal: GiftedFormModal
    }),
    navigationOptions: ({ navigation }) => ({
      title: "Profiel",
      gesturesEnabled: false,
      showIcons: true,
      tabBarIcon: () => (
        <Ionicons name="ios-contact-outline" size={32} color={"#4080ff"} />
      )
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
