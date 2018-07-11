import React, { Component } from "react";
import { Container, Form, Content, Text, Header, Title, Button, Icon, Item, Input, Fab, Footer, FooterTab, List, ListItem } from 'native-base';
import {
    View,
    StyleSheet,
    Alert
} from "react-native";
import auth from '../stores/auth.store';


export default class Login extends Component {
    email = '';
    password = '';

    constructor(props) {
        super(props)
        this.state = {
            emailVal: false,
            passwordVal: false
        }
        this.signIn = this.signIn.bind(this)
    }
    signIn() {
        const { navigate } = this.props.navigation;
        auth.signIn({ email: this.email, password: this.password });
        console.log('hier2' + auth.getUser())
        auth.signIn({ email: this.email, password: this.password }).then(() => {
            console.log('hier3' + auth.getUser())
            if (auth.getUser() != null) {
                navigate('Profile')
            }
        })
    }

    render() {
        return (
            <Form>
                <Item style={[styles.item, !this.state.emailVal ? styles.error : styles.good]} rounded>
                    <Icon style={{ color: "#fff" }} name='ios-contact-outline' />
                    <Input style={[styles.input]}
                        placeholder='Uw e-mailadres' placeholderTextColor="#fff"
                        onChangeText={(email) => this.validateEmail(email)} />
                </Item>

                <Item style={[styles.item, !this.state.passwordVal ? styles.error : styles.good]} rounded>
                    <Icon style={{ color: "#fff" }} name='ios-unlock-outline' />
                    <Input style={[styles.input]}
                        placeholder='Uw wachtwoord' placeholderTextColor="#fff" secureTextEntry={true}
                        onChangeText={(pass) => this.validatePassword(pass)} />
                </Item>

                {this.state.passwordVal && this.state.emailVal == true ?
                    <Button rounded block style={{ marginBottom: 10 }} onPress={() => this.signIn()}>
                        <Text>Login</Text>
                    </Button> :
                    <Button rounded disabled block style={{ marginBottom: 10 }} onPress={() => this.signIn()}>
                        <Text>Login</Text>
                    </Button>
                }
            </Form>

        );
    }

    validateEmail(text) {

        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (regex.test(text)) {
            this.email = text;
            this.setState({ emailVal: true })

        } else {
            this.setState({ emailVal: false })
        }

    }
    validatePassword(text) {

        if (text.trim() != "") {
            this.password = text;
            this.setState({ passwordVal: true })

        } else {
            this.setState({ passwordVal: false })
        }

    }
}

const styles = StyleSheet.create({

    item: {
        marginBottom: 10
    },
    input: {
        color: '#fff'
    },
    error: {
        borderWidth: 5,
        borderColor: 'red'
    },
    good: {
        borderWidth: 5,
        borderColor: 'green'
    }
})


