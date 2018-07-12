
import React, { Component } from 'react';
import firebaseApp from '../database/config'
import { Alert } from "react-native";

export default class AuthStore {

  authUser = null;
  cafes = [];

  constructor() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      this.authUser = user
    })



    this.itemsRef = this.getRef().child('cafes');
    this.mapCafes(this.itemsRef);
  }

  getRef() {
    return firebaseApp.database().ref();

  }

  signIn({ email, password }) {

    firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      Alert.alert(
        'Verkeerde gegevens',
        'probeer opnieuw',
        [
          { text: 'OK' },
        ],
        { cancelable: false }
      )
    });
  }

  getUser() {
    return this.authUser;
  }

  mapCafes(itemsRef) {

    itemsRef.on('value', (allecafes) => {
      let cafes = [];
      allecafes.forEach((cafe) => {

        cafes.push({
          id: cafe.val().id,
          naam: cafe.val().naam,
          beschrijving: cafe.val().beschrijving,
          regio: cafe.val().regio,
          logo: cafe.val().logo,
          email: cafe.val().email
        })
      });
      this.cafes = cafes;
    });


  }

  getCafeUser(email) {
    return this.cafes.filter(function (cafe) {
      return cafe.email == email;
    })

  }

}
