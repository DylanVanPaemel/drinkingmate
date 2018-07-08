import React, { Component } from "react";
import { Container, Content, Text, Header, Title, Button, Icon, Card, CardItem, Thumbnail, Fab, Footer, FooterTab } from 'native-base';
import {
    View,
    Stylesheet
} from "react-native";

class Mapscreen extends Component {

    render() {
        return (
            <Container>
                <View>
                    <Text> dit is het Mapscherm</Text>

                </View>
                <Footer >
                    <FooterTab>
                        <Button onPress={() =>  this.props.navigation.navigate('Home')}>
                            <Icon name='ios-pricetags' />
                            <Text>Acties</Text>
                        </Button>>
                <Button active >
                            <Icon name='ios-compass' />
                            <Text> Kaart</Text>
                        </Button>
                        <Button onPress={() =>  this.props.navigation.navigate('Profile')}>
                            <Icon name='ios-contact-outline' />
                            <Text> Mijn Profiel</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Mapscreen;