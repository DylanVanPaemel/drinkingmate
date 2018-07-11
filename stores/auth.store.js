
import firebaseApp from '../database/config'
import { Alert } from "react-native";

export default class AuthStore {

  authUser = null;

  constructor() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      this.authUser = user
    })
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


}
