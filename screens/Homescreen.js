import React, { Component } from "react";
import { Container, Content, Text, Header, Title, Button, Icon, Card, CardItem, Thumbnail, Fab, Footer, FooterTab } from 'native-base';
import {
    View,
    ListView,
    TouchableNativeFeedback,
    Stylesheet,
    Platform,
    TouchableOpacity
} from "react-native";
import firebaseApp from '../database/config'
import { WaveIndicator } from 'react-native-indicators';

//startscherm waar alle cafes in een lijst op het scherm verschijnen 
class Homescreen extends Component {



    constructor() {

        super();
        let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            itemDataSource: ds,
            Loaded: false,
            active: 'false',
        }
        this.itemsRef = this.getRef().child('cafes');
        this.renderRow = this.renderRow.bind(this);
        this.onPress = this.onPress.bind(this);


    }

    //gegevens van de database ophalen
    getRef() {
        return firebaseApp.database().ref();

    }


    //mount-methode om cafes in een array te steken
    componentDidMount() {
        this.getCafes(this.itemsRef);
    }


    //cafes in een array steken in 'state' dmv lambda's 
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

 //wanneer men op een cafe klikt
    onPress(cafe) {
        this.props.navigation.navigate('Details', { cafe: cafe });
    }

    // Cafes weergeven op het scherm 
    renderRow(item) {
        if(this.state.Loaded==false)
        {
            this.setState({ Loaded: true })
        }
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

    //Renderen van het scherm
    render() {
        return (
            <Container>
                <ListView dataSource={this.state.itemDataSource} renderRow={this.renderRow}></ListView>
                {this.state.Loaded == false ?
                    <View show={this.state.Loaded} style={{ flex: 1 }}>
                        <WaveIndicator color={'#4080ff'} waveMode='outline' />
                    </View> : null}
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
                <Footer >
                    <FooterTab>
                        <Button active >
                            <Icon name='ios-pricetags' />
                            <Text>Acties</Text>
                        </Button>>
                        <Button onPress={() => this.props.navigation.navigate('Map')} >
                            <Icon name='ios-compass' />
                            <Text> Kaart</Text>
                        </Button>
                        <Button  onPress={() => this.props.navigation.navigate('Profile')}>
                            <Icon name='ios-contact-outline' />
                            <Text> Mijn Profiel</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
export default Homescreen;