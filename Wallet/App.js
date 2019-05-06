/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './app/js/Home/Home';
import MultiTokenTransfer from './app/js/MultiTokenTransfer/MultiTokenTransfer';

export default class App extends Component {
    render() {
        return (
            <Router>
                  <Scene key='root'>
                      <Scene
                          key='Home'
                          title='Home'
                          component={Home}
                          initial
                      />
                      <Scene
                          key='multiTokenTransfer'
                          title='MultiTokenTransfer'
                          component={MultiTokenTransfer}
                      />
                  </Scene>
            </Router>
        );
    }
}
