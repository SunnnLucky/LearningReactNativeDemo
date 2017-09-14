/**
 * Created by softa on 2017/9/13.
 */

import React, { Component } from 'react';
import { View , Text , StyleSheet , Image , ScrollView } from 'react-native';

var TimerMixin = require('react-timer-mixin');
var Dimensions = require('Dimensions');
var {width , height , scale} = Dimensions.get('window');
//json data
var ImageData = require('./ImageData.json');

// ES5
var mainFunc;
mainFunc = React.createClass({

    //注册计时器
    mixins: [TimerMixin],

    //设置固定值
    getDefaultProps(){
        return{
            //每隔多长时间
            duration:2000,
        };
    },

    //设置可变的初始值
    getInitialState(){
        return{
            currentPage : 0,
        };
    },

    render(){
        return (
            <View style={styles.container}>
                <ScrollView
                    ref = 'scrollView'
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    //一帧滚动结束时调用
                    onMomentumScrollEnd = {(myScrollView) => this.animationEnd(myScrollView)}
                    //当拖拽时调用
                    onScrollBeginDrag = {this.onScrollBeginDrag}
                    //当停止拖拽时调用
                    onScrollEndDrag = {this.onScrollEndDrag}
                >
                    {this.renderImages()}
                </ScrollView>
                <View style={styles.bottomViewStyle}>
                    {this.renderPageCircle()}
                </View>
            </View>
        );
    },

    //当停止拖拽时调用
    onScrollEndDrag(){
        //唤醒定时器
        this.startTimer();
    },

    //当拖拽时调用
    onScrollBeginDrag(){
        //停止定时器
        this.clearInterval(this.timer);
    },

    //一帧滚动结束时调用
    animationEnd(myScrollView){
        // 1.求出水平方向的偏移量
        var offsetX = myScrollView.nativeEvent.contentOffset.x;
        // 2.根据偏移量求出当前页数
        var curentPage = Math.floor(offsetX / width);
        // 3.更新状态机，重新绘制UI
        this.setState({
            currentPage:curentPage,
        });
        //console.log(curentPage);
    },

    //返回图片
    renderImages(){
        var allImages = [];
        for (let i = 0; i < ImageData.data.length; i++) {
            var images = ImageData.data[i];
            // 转入数组
            allImages.push(
                <Image key={i} source={{uri: images.img}} style={styles.myImageStyle} resizeMode={'stretch'}/>
            );
        }
        return allImages;
    },

    //返回page上的原点
    renderPageCircle(){
        // 定义一个数组放置所有圆点
        var circleArray = [];
        var style;
        // 拿到图像数组
        var imageArray = ImageData.data;
        for (let i = 0 ; i < imageArray.length; i++){

            //判断
            style = (i == this.state.currentPage) ? {color : 'orange'} : {color : 'white'};

            circleArray.push(
                <Text key = {i} style={[{fontSize : 25},style]}>&bull;</Text>
            );
        }
        return circleArray;
    },

    //组件加载完毕
    componentDidMount(){
        //开启定时器
        this.startTimer();

    },

    startTimer(){
        // 1.拿到scrollView
        var scrollView = this.refs.scrollView;
        // 2.添加定时器
        this.timer = this.setInterval(function () {
            // 2.1设置圆点
            var activePage = this.state.currentPage;

            // 2.2判断
            if((this.state.currentPage + 1) >= ImageData.data.length){
                //越界
                activePage = 0;
            }else{
                activePage = this.state.currentPage + 1;
            }

            // 2.3更新状态机
            this.setState({
                currentPage : activePage,
            });

            // 2.4滚动
            var offsetX = activePage * width;
            scrollView.scrollResponderScrollTo({x:offsetX,y:0, animated:true});

        }, this.props.duration);
    },
});

const styles = StyleSheet.create({
    container : {
        marginTop : 64,
    },
    bottomViewStyle : {
        position : 'absolute',
        bottom : 0,
        backgroundColor : 'rgba(0,0,0,0.3)',
        width : width,
        height : 25,
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 10,
    },
    myImageStyle : {
        width : width,
        height : 130,
    },
});

module.exports = mainFunc;