/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* 组件导入区 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

// import startUp from './testApp/04_imageDemo/imageDemo.js'
// import startUp from './testApp/05_QQloginView/QQloginView.js'
// import startUp from './testApp/06_RotationImage/RotationImage.js'
// import startUp from './testApp/07_listViewDemo/listViewDemo.js'
import startUp from './testApp/08_carListView/carListView.js'

/* 注册启动组件 */
AppRegistry.registerComponent('MyApp', () => startUp);