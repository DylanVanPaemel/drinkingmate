import React, { Component } from 'react';
import { Container, Form, Content, Text, Header, Title, Button, Icon, Item, Input, Fab, Footer, FooterTab, List, ListItem } from 'native-base';
import {
    View,
    StyleSheet
} from "react-native";
import firebaseApp from '../database/config'

export default class Profile extends Component {

    constructor(props) {
        super(props)
    }

    signOut() {

        firebaseApp.auth().signOut().then(function () {
            // Sign-out successful.
            this.authUser = null;
        }).catch(function (error) {
            // An error happened.
        });

    }

    render() {
        return (
            <Form>
                <Button rounded block style={{ marginBottom: 10 }} onPress={this.signOut.bind(this)}>
                    <Text>UItloggen</Text>
                </Button>
            </Form>

        );
    }
}