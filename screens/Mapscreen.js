import React, { Component} from "react";
import {
    View,
    Text,
    Stylesheet
} from "react-native";
import{createBottomTabNavigator} from 'react-navigation'
class Homescreen extends Component{
    render(){
        return (
        <View>
            <Text> dit is het homescherm</Text>
        </View>
        );
    }
}

class Mapscreen extends Component{
    render(){
        return (
        <View>
            <Text> dit is het Mapscherm</Text>
        </View>
        );
    }
}
const HomescreenTabNavigator = createBottomTabNavigator({
    Home:{
        screen:Homescreen
    },
    Map:{
        screen:Mapscreen
    }

},{
    animationEnabled: true
})
export default Mapscreen;