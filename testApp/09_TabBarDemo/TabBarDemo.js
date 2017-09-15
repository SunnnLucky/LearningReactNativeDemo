/**
 * Created by softa on 2017/9/15.
 */
import React, { Component } from 'react';
import { View , Text , StyleSheet , TabBarIOS , TouchableOpacity} from 'react-native';



export default class MainFunc extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedTabBarItem : 0,
        };
    }

    render(){
        return(
            <View style={{flex : 1}}>
                <View style={styles.NavStyle}>
                    <Text style={{marginTop:20,color:'white'}}>TabBarDemo</Text>
                </View>
                {/*选项卡*/}
                <TabBarIOS barTintColor = 'black' tintColor = 'white'>
                    {this.setupTabBar(['contacts','downloads','bookmarks','top-rated'])}
                </TabBarIOS>
            </View>
        );
    };

    setupTabBar(names){

        var TabBarArray = [];

        for (let i = 0 ; i < names.length ; i++){
            TabBarArray.push(
                <TabBarIOS.Item
                    key = {i}
                    systemIcon = {names[i]}
                    selected = {this.state.selectedTabBarItem == i}
                    onPress = {() => {this.setState({selectedTabBarItem : i})}}
                >
                    <View style={styles.commonViewStyle}>
                        <Text>第{i}页</Text>
                    </View>
                </TabBarIOS.Item>
            )
        }
        return TabBarArray;
    };
};

const styles = StyleSheet.create({
    NavStyle : {
        width:375,
        height:64,
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:'white',
        backgroundColor:'black'
    },
    commonViewStyle : {
        flex : 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white',
    },

});