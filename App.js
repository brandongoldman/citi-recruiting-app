import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './app/components/Login';
import Dashboard from './app/components/Dashboard';

const Application = StackNavigator({
  Home: { screen: Login },
  Dashboard: { screen: Dashboard},
}, {
  navigationOptions: {
    header: false,
  }
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}