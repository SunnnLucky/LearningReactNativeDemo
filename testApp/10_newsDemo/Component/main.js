/**
 * Created by softa on 2017/9/15.
 */

import React, { Component } from 'react';
import { View , Text , StyleSheet , TabBarIOS , NavigatorIOS } from 'react-native';

//引入外部组件
var Home = require('../Component/home');
var Message = require('../Component/message');
var Find = require('../Component/find');
var Mine = require('../Component/mine');

var main = React.createClass({

    getInitialState(){
        return{
            selectedTabBarItem : 1,
        }
    },

    render(){
        return (
            <TabBarIOS
                tintColor={'orange'}
            >
                {/*首页*/}
                <TabBarIOS.Item
                    title = '首页'
                    icon = {require('../images/TabBar/tabbar_home@2x.png')}
                    selected = {this.state.selectedTabBarItem == 1}
                    onPress = {() => {this.setState({selectedTabBarItem : 1})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component : Home,
                            title : '首页',
                            leftButtonIcon : require('../images/NavigationBar/navigationbar_friendattention@2x.png'),
                            rightButtonIcon : require('../images/NavigationBar/navigationbar_pop@2x.png'),
                            tintColor : 'orange',
                        }}
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item
                    title = '消息'
                    icon = {require('../images/TabBar/tabbar_message_center@2x.png')}
                    selected = {this.state.selectedTabBarItem == 2}
                    onPress = {() => {this.setState({selectedTabBarItem : 2})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component : Message,
                            title : '消息',
                        }}
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item
                    title = '发现'
                    icon = {require('../images/TabBar/tabbar_discover@2x.png')}
                    selected = {this.state.selectedTabBarItem == 3}
                    onPress = {() => {this.setState({selectedTabBarItem : 3})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component : Find,
                            title : '发现',
                        }}
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item
                    title = '我的'
                    icon = {require('../images/TabBar/tabbar_profile@2x.png')}
                    selected = {this.state.selectedTabBarItem == 4}
                    onPress = {() => {this.setState({selectedTabBarItem : 4})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component : Mine,
                            title : '我的',
                        }}
                    >
                    </NavigatorIOS>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    },


});

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
});

module.exports = main;