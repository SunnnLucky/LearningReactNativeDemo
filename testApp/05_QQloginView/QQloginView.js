/**
 * Created by softa on 2017/9/12.
 */

import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , TextInput , TouchableOpacity , AlertIOS } from 'react-native';

var Dimensions = require('Dimensions');
var {width , height , scale} = Dimensions.get('window');
var marginTB = 30;

export default class mainFunc extends  Component{

    render(){
        return(
            <View style = { styles.container }>
                {/* 头像 */}
                <Image source={{uri : 'icon.png'}} style={styles.iconStyle} />
                {/* 输入框 */}
                <TextInput placeholder={'请输入账号'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'} style={styles.textInputStyle} password = {true} />
                {/* 登录按钮 */}
                <TouchableOpacity activeOpacity={0.5}
                                  onPress={this.loginBtnClick.bind(this, '点击')}
                                  onPressIn={this.loginBtnClick.bind(this, '按下')}
                                  onPressOut={this.loginBtnClick.bind(this, '抬起')}
                                  onLongPress={this.loginBtnClick.bind(this, '长按')}
                >
                    <View style={styles.loginBtnStyle}>
                        <Text style={{color:'white'}}>登录</Text>
                    </View>
                </TouchableOpacity>
                {/* 无法登录与注册 */}
                <View style={styles.otherBtnView}>
                    <Text style={{color:'#3299CC'}}>无法登录</Text>
                    <Text style={{color:'#3299CC'}}>注册</Text>
                </View>
                {/* 第三方登录 */}
                <View style = {styles.otherLoginStyle}>
                    <Text　style={{fontSize : 12}}>其他方式登录:</Text>
                    <Image source={{uri : 'icon3.png'}} style = {styles.loginIconStyle}/>
                    <Image source={{uri : 'icon7.png'}} style = {styles.loginIconStyle} />
                    <Image source={{uri : 'icon8.png'}} style = {styles.loginIconStyle}/>
                </View>
            </View>
        );
    };

    loginBtnClick(title1){
        // AlertIOS.alert(title1)
    };
};


const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#dddddd',
        //次轴对齐方式
        alignItems : 'center',
    },
    iconStyle : {
        marginTop : 64,
        marginBottom : marginTB,
        width : 80,
        height : 80,
        borderRadius : 40,
        borderWidth : 2,
        borderColor : 'white',
    },
    textInputStyle : {
        height : 38,
        backgroundColor : 'white',
        marginBottom : 1,
        //内容居中
        textAlign : 'center',
    },
    loginBtnStyle : {
        marginTop : marginTB,
        marginBottom : 20,
        height : 35,
        width : width * 0.8,
        backgroundColor : '#007FFF',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 8,
    },
    otherBtnView : {
        width : width ,
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingRight : 20,
        paddingLeft : 20,
    },
    otherLoginStyle : {
        flexDirection : 'row',
        alignItems : 'center',
        //绝对定位
        position : 'absolute',
        bottom : 10,
        left : 10,
    },
    loginIconStyle : {
        marginLeft : 10,
        width : 30,
        height : 30,
        borderRadius : 15,
    },
});

