/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/* 组件导入区 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import startUp from './testApp/10_newsDemo/newsDemo.js'

/* 注册启动组件 */
AppRegistry.registerComponent('MyApp', () => startUp);