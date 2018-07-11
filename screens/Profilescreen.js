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
        const { auth } = this.props.stores
        
    }
    
    static navigationOptions = ({ navigation }) => ({
        title: "Mijn profiel",
        headerLeft: null,
    })

    render() {
        return (
            <Container>
                <Content scrolleabled={false}>
                    <Profile {...this.props} />
                </Content>
            </Container>
        );
    }
}

