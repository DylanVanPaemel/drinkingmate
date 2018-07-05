import React, { Component } from "react";
import { Container, Content, Text, Header, Title, Button, Icon, Card, CardItem, Thumbnail, Fab } from 'native-base';
import {
    View,
    ListView,
    TouchableNativeFeedback,
    Stylesheet,
    Platform,
    TouchableOpacity
} from "react-native";
import firebaseApp from '../database/config'
import Mapscreen from '../screens/Mapscreen';
import { createBottomTabNavigator } from 'react-navigation'
import { WaveIndicator } from 'react-native-indicators';

class Homescreen extends Component {

    static navigationOptions = ({ navigation }) => ({

        title: 'Vind een actie',
    });

    constructor() {
        super();
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            itemDataSource: ds,
            isLoading: false,
            active: 'false',
        }
        this.itemsRef = this.getRef().child('cafes');
        this.renderRow = this.renderRow.bind(this);
        this.onPress = this.onPress.bind(this);


    }

    getRef() {
        return firebaseApp.database().ref();

    }

    //View maken om weer te geven
    /*     componentsWillMount() {
            this.getCafes(this.itemsRef);
            this.setState({ isLoading: !this.state.isLoading })
    
        } */

    componentDidMount() {
        this.getCafes(this.itemsRef);
        this.setState({ isLoading: !this.state.isLoading })
    }


    getCafes(itemsRef) {

        itemsRef.on('value', (allecafes) => {
            let cafes = [];
            allecafes.forEach((cafe) => {

                cafes.push({
                    id: cafe.val().id,
                    naam: cafe.val().naam,
                    beschrijving: cafe.val().beschrijving,
                    regio: cafe.val().regio,
                    logo: cafe.val().logo
                })
            });
            this.setState({
                itemDataSource: this.state.itemDataSource.cloneWithRows(cafes)

            });

        });

    }


    onPress(cafe) {
        this.props.navigation.navigate('Details', { cafe: cafe });
    }

    renderRow(item) {
        if (Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback onPress={() => {
                    this.onPress(item);
                }}>
                    <Card>
                        <CardItem style={{ justifyContent: 'space-between' }}>
                            <Thumbnail source={{ uri: item.logo }} />
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text> {item.naam} </Text>
                                <Text note> {item.regio} (afstand: ) </Text>
                            </View>
                            <Icon name='ios-arrow-dropright' style={{ color: '#ED4A6A' }} />
                        </CardItem>
                    </Card>
                </TouchableNativeFeedback>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => {
                    this.onPress(item);
                }}>
                    <Card>
                        <CardItem style={{ justifyContent: 'space-between' }}>
                            <Thumbnail source={{ uri: item.logo }} />
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Text> {item.naam} </Text>
                                <Text note> {item.regio} (afstand: ) </Text>
                            </View>
                            <Icon name='ios-arrow-dropright' style={{ color: '#ED4A6A' }} />
                        </CardItem>
                    </Card>
                </TouchableOpacity >);


        }

    }

    render() {
        return (
            <Container>
                <ListView dataSource={this.state.itemDataSource} renderRow={this.renderRow}></ListView>
                <View show={this.state.isLoading} style={{ flex: 1 }}>
                    <WaveIndicator color={'#4080ff'} waveMode='outline' />
                </View>
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{}}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="ios-settings" />
                        {/*  <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                        </Button> */}
                    </Fab>
                </View>
            </Container>
        )
    }
}

const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: Homescreen,
        navigationOptions: () => ({
            showIcons: true,
            tabBarIcon: () => (
                <Ionicons name="ios-home" size={32} color={'#4080ff'} />
            )
        })
    },
    Map: {
        screen: Mapscreen,
        navigationOptions: () => ({
            showIcons: true,
            tabBarIcon: () => (
                <Ionicons name="ios-compass" size={32} color={'#4080ff'} />
            )
        })
    }
})
export default Homescreen;