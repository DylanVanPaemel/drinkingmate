import React, { Component } from 'react';
import {
    Container,
    Content,
    Text,
    Button
} from 'native-base'
import Profile from '../components/profile.component';


export default class Profilescreen extends Component {

    currentCafe = [];

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.currentCafe = this.props.navigation.state.params.cafe
    }

    signOut() {

        firebaseApp.auth().signOut().then(function () {
            // Sign-out successful.
            this.authUser = null;
        }).catch(function (error) {
            // An error happened.
        });

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
                    <Profile />
                </Content>
            </Container>
        );
    }
}

