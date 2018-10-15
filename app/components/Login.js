import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDLl1_to55twGj4I4l3ocYSmzTjoHu6Qr0",
  authDomain: "citi-recruiting-app.firebaseapp.com",
  databaseURL: "https://citi-recruiting-app.firebaseio.com",
  projectId: "citi-recruiting-app",
  storageBucket: "citi-recruiting-app.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Please enter a password with 6 or more characters.');
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = firebase.auth().currentUser;
        })
        .then(() => { this.props.navigation.navigate('Dashboard') });;
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => { this.props.navigation.navigate('Dashboard') });
    }
    catch (error) {
      console.log(error.toString());
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <View style={styles.container}>
          <Image
            source={require('../../images/citi.png')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20
            }}
          />

          <Text style={styles.header}>Recruiting App</Text>

          <TextInput
            style={styles.textInput}
            placeholder='Email'
            onChangeText={(email) => this.setState({ email })}
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            placeholder='Password'
            onChangeText={(password) => this.setState({ password })}
            underlineColorAndroid='transparent'
            autoCapitalize="none"
            autoCorrect={false}
          />

          <TouchableOpacity onPress={() => this.loginUser(this.state.email, this.state.password)}
            style={!this.state.email || !this.state.password ? styles.disabled : styles.btn}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.signUpUser(this.state.email, this.state.password)}
            style={styles.btn_signup}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 40,
    color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center',
  },
  btn_signup: {
    alignSelf: 'stretch',
    backgroundColor: '#2896d3',
    padding: 20,
    alignItems: 'center',
    marginTop: 20
  },
  disabled: {
    alignSelf: 'stretch',
    backgroundColor: '#D3D3D3',
    padding: 20,
    alignItems: 'center',
  }
});