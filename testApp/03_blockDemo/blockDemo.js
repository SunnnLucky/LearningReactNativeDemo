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
            <View  style = {{marginTop : 64}}>
                <Text>根结点上的View组件，不设置宽度</Text>
                <View style={{height:30,backgroundColor:'red'}}></View>
                <Text>根结点上的View组件，设置宽度</Text>
                <View style={{height:30,width:120,backgroundColor:'red'}}></View>
                <Text>运用flex布局，多个组件在同一行显示</Text>
                <View style={{flexDirection:'row'}}>
                    <View style={{height:30,backgroundColor:'yellow',flex:1}}></View>
                    <View style={{height:30,backgroundColor:'blue',flex:1}}></View>
                    <View style={{height:30,backgroundColor:'green',flex:1}}></View>
                </View>
                <Text>运用flex布局，多个组件不在同一行显示</Text>
                <View style={{flexDirection:'column'}}>
                    <View style={{height:30,backgroundColor:'yellow'}}></View>
                    <View style={{height:30,backgroundColor:'blue'}}></View>
                    <View style={{height:30,backgroundColor:'green'}}></View>
                </View>
            </View>
        );
    }

};
