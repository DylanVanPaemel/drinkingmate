import React, { Component } from "react";
import { Container, Content, Text, Header, Title, Button, Icon, Card, CardItem, Thumbnail,InputGroup,Input, Fab, Footer, FooterTab, List, ListItem } from 'native-base';
import {
    View,
    Stylesheet
} from "react-native";

class Profile extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-person' />
                                <Input placeholder='EMAIL' />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name='ios-unlock' />
                                <Input placeholder='PASSWORD' secureTextEntry={true} />
                            </InputGroup>
                        </ListItem>
                    </List>
                </Content>
                <Footer >
                    <FooterTab>
                        <Button onPress={() =>  this.props.navigation.navigate('Home')}>
                            <Icon name='ios-pricetags' />
                            <Text>Acties</Text>
                        </Button>>
                    <Button onPress={() => this.props.navigation.navigate('Map')} >
                            <Icon name='ios-compass' />
                            <Text> Kaart</Text>
                        </Button>
                        <Button active >
                            <Icon name='ios-contact-outline' />
                            <Text> Mijn Profiel</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default Profile;