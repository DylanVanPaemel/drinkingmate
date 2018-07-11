import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Button
} from 'native-base'
import Profile from '../components/profile.component';


export default class Profilescreen extends Component {

    constructor(props) {
        super(props)
        
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: "Mijn profiel",
        headerLeft: null,
        gesturesEnabled: false,
    })

    render() {
        return (
            <Container>
                <Content scrolleabled={false}>
                <Profile/>
                </Content>
            </Container>
        );
    }
}

