/**
 * @file Home.js
 * @author zmh377
 * @description Home.js
*/

import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {View} from 'react-native';
import {Button, WhiteSpace} from '@ant-design/react-native';

export default class Home extends Component {


    onClick() {
        Actions.multiTokenTransfer();
    }

    qrClick() {
        Actions.qrCode();
    }
    render() {
        return (
            <View>
                <WhiteSpace />
                <Button
                    type='primary'
                    onPress={() => this.onClick()}
                >
                    MultiTokenTransfer
                </Button>
                <WhiteSpace />
                <Button
                    type='primary'
                    onPress={() => this.qrClick()}
                >
                    QRcode
                </Button>
                <WhiteSpace />
            </View>
        );
    }
}
