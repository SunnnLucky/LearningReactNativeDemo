/**
 * Created by softa on 2017/9/7.
 */

/* 组件导入区 */
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'

/* 核心代码区 */

var person = {
    name : 'Bob',
    age : 18,
    city : 'beijing',

};

export default class helloWorld extends Component {

    render(){
        return(
            <View style={styles.container}>
                <Text style={{ backgroundColor : 'green'  , height : 30 ,}}>第1个</Text>
                <Text style={{ backgroundColor : 'yellow' , height : 40 ,}}>第2个</Text>
                <Text style={{ backgroundColor : 'blue'   , height : 50 ,alignSelf : 'flex-end',}}>第3个</Text>
                <Text style={{ backgroundColor : 'gray'   , height : 60 ,}}>第4个</Text>
                <Text style={{ backgroundColor : 'red'    , height : 70 ,}}>第5个</Text>
            </View>
        );
    }

}

/* 组件样式区 */
const styles = StyleSheet.create({
    container: {
        //主轴
        flexDirection : 'row',
        backgroundColor : '#F5FCFF',
        //上边距
        marginTop : 20,
        //主轴对齐方式
        justifyContent : 'space-between',
        //次轴对齐方式
        alignItems : 'center',
        //换行样式：默认不换行
        // flexWrap : 'wrap',
    },

    text :{

    }
})