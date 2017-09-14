/**
 * Created by softa on 2017/9/13.
 */

import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , ListView , TouchableOpacity} from 'react-native';

//import json data
var wine = require('./Wine.json');
// 导入屏幕尺寸
var Dimensions = require('Dimensions');
var { width , height , scale }  = Dimensions.get('window');

export default class mainFunc extends Component {

    constructor(props){
        super(props);

        //1.设置数据源
        var ds = new ListView.DataSource({
            rowHasChanged:( r1 , r2 ) => r1 !== r2,
        });

        //1.2设置返回数据
        this.state = {
            dataSource : ds.cloneWithRows(wine),
        };
    }

    render(){
        return(
            <ListView style={[{marginTop: 20},styles.container]}
                      dataSource = {this.state.dataSource}   // dataSource
                      renderRow = {this.renderRow}
                      showsVerticalScrollIndicator = {false}
            >
            </ListView>
        );
    };



    //返回具体的cell
    renderRow(rowData,sectionID,rowID){
        return(
            <TouchableOpacity activeOpacity={0.5}
                              onPress={() => {alert('点击了' + rowID + '行')}}
            >
            <View style = {styles.cellStyle}>
                <Image source={{uri : rowData.image}} style={styles.cellImageStyle}></Image>
                <View style={styles.contentView}>
                    <Text style={styles.TopTextStyle}>{rowData.name}</Text>
                    <Text style={styles.BottomTextStyle}>¥{rowData.money}</Text>
                </View>
            </View>
            </TouchableOpacity>
        )
    };

    loginBtnClick(title){
        alert('11');
    }

};

const styles = StyleSheet.create({
    container : {
    },
    cellStyle : {
        flexDirection : 'row',
        //下划线
        borderBottomWidth : 1,
        borderBottomColor : '#e8e8e8',
        padding : 10,
    },
    contentView : {
        flexDirection : 'column',
    },
    cellImageStyle : {
        width : 110,
        height : 110,
        marginRight : 10,
    },
    TopTextStyle : {
        width : (width - 110 - 20),
        fontSize : 13,
        marginBottom : 5,
    },
    BottomTextStyle : {
        alignSelf : 'flex-start',
        fontSize : 12,
        color : 'red',
    },

});