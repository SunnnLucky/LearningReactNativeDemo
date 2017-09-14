/**
 * Created by softa on 2017/9/12.
 */

/* Component import area */
import React , { Component } from 'react';
import { Text , View , StyleSheet , Image } from  'react-native';

// import json data
var PackagesData = require('./BadgeData.json');

// 导入屏幕尺寸
var Dimensions = require('Dimensions');
var { width , height , scale }  = Dimensions.get('window');

// 定义全局变量
var cols = 3;
var imageWH = 100;
var imageVMargin = ( width - cols * imageWH ) / ( cols + 1 );
var imageHMargin = 25;

/* Core code area */
class mainFunc extends  Component {
    render(){
        return(
            <View style = { styles.container }>
                {/* Returns six packages */}
                {this.renderAllPackages()}
            </View>
        );
    };

    // Returns the function of all packages
    renderAllPackages(){
        // Define the array of bag
        var allPackages = [];
        // Traverse json data
        for( let i = 0 ; i < PackagesData.data.length ; i++ ){
            // Get individual data objects
            var packages = PackagesData.data[i];
            // 转入数组
            allPackages.push(
                <View key = { i } style={styles.outViewStyle}>
                    <Image source={{uri: packages.icon}} style={styles.myImageStyle}/>
                    <Text style={styles.textStyle}>
                        {packages.title}
                    </Text>
                </View>
            );
        };
        return allPackages;
    };
};

/* Style area */
const styles = StyleSheet.create({
    container : {
        // flex : 1,
        // backgroundColor : '#F5FCFF',
        flexDirection : 'row',
        flexWrap : 'wrap',
    },
    outViewStyle : {
        backgroundColor : 'gray',
        alignItems : 'center',
        width : imageWH,
        height : imageWH,
        marginLeft : imageVMargin,
        marginTop : imageHMargin,
    },
    myImageStyle : {
        width : 80,
        height : 80,
    },
    textStyle : {

    },
});

module.exports = mainFunc;