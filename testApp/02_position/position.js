/**
 * Created by softa on 2017/9/11.
 */

/* 组件导入区 */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

/* 核心代码区 */
export default class getScreenWH extends Component {

    render(){
        return(
            <View  style = {{marginTop : 50}}>
                <Text>relative position</Text>
                <View style={{height : 130 , backgroundColor : 'red' , paddingTop : 50}}>
                    <View style={styles.firstView}></View>
                </View>

                <Text>absolute position</Text>
                <View style={{height : 130 , backgroundColor : 'blue' , paddingTop : 50}}>
                    <View style={styles.secendView}></View>
                </View>
            </View>
        );
    }

};

/* 组件样式区 */
const styles = StyleSheet.create({

    firstView: {
        width  : 60,
        height : 60,
        backgroundColor : 'yellow',
        top : 10,
        left : 150,
        position : 'relative',
    },

    secendView: {
        width  : 60,
        height : 60,
        backgroundColor : 'yellow',
        top : 10,
        right : 15,
        position : 'absolute',
    },
});