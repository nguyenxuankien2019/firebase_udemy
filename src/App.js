import React, { Component } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { Header } from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm'
class App extends Component {
  componentWillMount() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD_oDNWKSaY8SKYOOdXXts90YFLGmj9E8U",
      authDomain: "udemy-kiennx-958dd.firebaseapp.com",
      databaseURL: "https://udemy-kiennx-958dd.firebaseio.com",
      projectId: "udemy-kiennx-958dd",
      storageBucket: "udemy-kiennx-958dd.appspot.com",
      messagingSenderId: "733581727638",
      appId: "1:733581727638:web:24a04c02f039cd5664efb7",
      measurementId: "G-1RE6DEW1EX"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);

    }
  }
  render() {
    const { containerStyle } = styles;
    return (
      <SafeAreaView style={containerStyle}>
        <Header headerText="Authentication" />
        <LoginForm />
      </SafeAreaView>
    )
  }
}

const styles = {
  containerStyle: {
    flex: 1,
  }
}
export default App;