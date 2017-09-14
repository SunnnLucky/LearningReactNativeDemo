/**
 * Created by softa on 2017/9/14.
 */
import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , ListView , TouchableOpacity} from 'react-native';

//import json data
var carData = require('./Car.json');

// 导入屏幕尺寸
var Dimensions = require('Dimensions');
var { width , height , scale }  = Dimensions.get('window');

export default class mainFunc extends Component {

    constructor(props){
        super(props);

        var getSectionData = (dataBlob,sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID + ':' + rowID ];
        };

        this.state = {
            dataSource : new ListView.DataSource({
                getSectionData : getSectionData,            //获取组中的数据
                getRowData : getRowData,                    //获取行中的数据
                rowHasChanged : (r1,r2) => r1 !== r2,
                sectionHeaderHasChanged : (s1,s2) => s1 !== s2
            }),
        };
    }

    render(){
        return(
            <View style={styles.outerViewStyle}>
                <View style={styles.logoStyle}>
                    <Text style={{fontSize : 15}}>汽车品牌</Text>
                </View>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = {this.renderRow}
                    renderSectionHeader = {this.renderSectionHeader}
                >
                </ListView>
            </View>
        );

    }

    renderRow(rowData,sectionID,rowID){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.cellStyle}>
                    <Image source={{uri : rowData.icon}} style={styles.cellImageStyle}></Image>
                    <Text style={styles.cellTextStyle}>{rowData.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    //每一组的数据
    renderSectionHeader(sectionData,sectionID){
        return(
            <View style={styles.sectionStyle}>
                <Text style={{fontSize : 15,left : 10}}>{sectionData}</Text>
            </View>
        )
    }

    //组件加载完毕
    componentDidMount() {
        //处理json数据
        this.loadDataFormJson();
    }

    loadDataFormJson(){
        //拿到json数据
        var jsonData = carData.data;
        //定义变量
        var dataBlob = {},
            sectionIDs = [],
            rowIDs = [],
            cars = [];
        //遍历数组
        for (let i = 0 ; i < jsonData.length ; i++){
            // 1.把组号放入sectionIDs数组中
            sectionIDs.push(i);
            // 2.把组中的内容放入dataBlob对象中
            dataBlob[i] = jsonData[i].title;
            // 3.取出该组中所有的车
            cars = jsonData[i].cars;
            rowIDs[i] = [];                //二维数组
            // 4.遍历所有的车数组
            for (let j = 0 ; j < cars.length ; j++){
                //把行号放入rowIDs
                rowIDs[i].push(j);
                //把每一行的内容放入dataBlob对象中
                dataBlob[ i + ':' + j ] = cars[j];
            }
        }

        //更新状态
        this.setState({
            dataSource : this.state.dataSource.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        });

    }
};

const styles = StyleSheet.create({
    outerViewStyle : {
        flex : 1,
        backgroundColor : 'gray',
    },
    logoStyle : {
        height : 64,
        width : width,
        backgroundColor : 'white',
        alignItems : 'center',
        justifyContent : 'center',
        borderBottomWidth : 1,
        borderColor : 'black',
    },
    cellStyle : {
        width : width,
        backgroundColor : 'white',
        borderBottomWidth : 0.5,
        borderColor : 'gray',
        padding : 10,
        flexDirection : 'row',
        alignItems : 'center',
    },
    cellImageStyle : {
        width : 80,
        height :80,
    },
    cellTextStyle : {
        left : 20,
        fontSize : 18,
    },

    sectionStyle : {
        width : width,
        height : 20,
        backgroundColor : 'gray',
    }

});