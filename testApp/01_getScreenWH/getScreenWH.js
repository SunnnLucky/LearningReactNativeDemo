/**
 * Created by softa on 2017/9/11.
 */
/**
 * Created by softa on 2017/9/7.
 */

/* 组件导入区 */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

/* 核心代码区 */

//引入
var Dimensions = require('Dimensions');
var { width , height , scale } = Dimensions.get('window');


export default class getScreenWH extends Component {

    render(){
        return(
            <View  style = {styles.thisIsViewStyle}>
                <Text>
                    当前屏幕宽度：{ width  + '\n'}
                    当前屏幕高度：{ height + '\n'}
                    当前屏幕分辨率：{ scale  + '\n'}
                </Text>
            </View>
        );
    }

};

/* 组件样式区 */
const styles = StyleSheet.create({

    thisIsViewStyle: {
        //占满屏幕
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
});