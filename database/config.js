import firebase from 'firebase';

   /*  firebase.database().ref('Cafe/2').set(
     {
         naam: 'BARZ',
         locatie: 'Aalter'
     }
     ) */


const config = {
    clientId: '506500344827-298snpor8sudtf0p93rht7cb6qvjc7bc.apps.googleusercontent.com',
    appId: '1:506500344827:ios:2be7cab3c71d4d45',
    apiKey: 'AIzaSyAoGJhknFC2Vz5sRzw0KNHcVVWSlbiqRfw',
    databaseURL: 'https://drinkingmate-41e41.firebaseio.com',
    storageBucket: 'drinkingmate-41e41.appspot.com',
    messagingSenderId: '506500344827',
    projectId: 'drinkingmate-41e41',
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();