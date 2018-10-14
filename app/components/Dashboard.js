import React, {Component} from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
  } from 'react-native';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Dashboard</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        marginBottom: 60,
        color: '#fff',
        fontWeight: 'bold'
    }
});