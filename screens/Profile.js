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
                        <Button block> Inloggen </Button>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Profile;