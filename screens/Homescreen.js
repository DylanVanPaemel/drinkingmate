import React, { Component } from "react";
import {
    View,
    Text,
    ListView,
    TouchableHighlight,
    Stylesheet,
    FlatList
} from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import Mapscreen from '../screens/Mapscreen';
import firebaseApp from '../database/config'

class Homescreen extends Component {
    constructor() {
        super();
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            itemDataSource: ds
        }
        this.itemsRef = this.getRef().child('cafes');
        this.renderRow = this.renderRow.bind(this);
        this.pressRow = this.pressRow.bind(this);
    }

    getRef() {
        return firebaseApp.database().ref();
    }

    //View maken om weer te geven
    componentsWillMount() {
        this.getCafes(this.itemsRef);
    }

    componentDidMount() {
        this.getCafes(this.itemsRef);
    }


    getCafes(itemsRef) {

        itemsRef.on('value', (allecafes) => {
            let cafes = [];
            allecafes.forEach((cafe) => {

                cafes.push({
                    naam: cafe.val().naam
                })
            });
            this.setState({
                itemDataSource: this.state.itemDataSource.cloneWithRows(cafes)

            });

        });

    }



    pressRow(item) {
        console.log(item);
    }

    renderRow(item) {
        return (
            <TouchableHighlight onPress={() => {
                this.pressRow(item);
            }}>
                <View>
                    <Text>{item.naam}</Text>
                </View>
            </TouchableHighlight>

        );

    }

    render() {

        return (
            <View>
                <ListView dataSource={this.state.itemDataSource} renderRow={this.renderRow} />
            </View>
        )
    }
}

const HomescreenTabNavigator = createBottomTabNavigator({
    Home: {
        screen: Homescreen,
    },
    Map: {
        screen: Mapscreen
    }

}, {
        animationEnabled: true
    })

export default Homescreen;