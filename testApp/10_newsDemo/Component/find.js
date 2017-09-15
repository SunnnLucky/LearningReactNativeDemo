/**
 * Created by softa on 2017/9/15.
 */
import React, { Component } from 'react';
import { View , Text , StyleSheet } from 'react-native';

var find = React.createClass({
    render(){
        return (
            <View style={styles.container}>
                <Text>发现</Text>
            </View>
        );
    }

});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

module.exports = find;