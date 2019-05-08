/**
 * @file MultiTokenTransfer.js
 * @author zmh377
 * @description MultiTokenTransfer.js
*/

import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {InputItem, Button, WhiteSpace} from '@ant-design/react-native';
import config from '../../config/config';
import aelf from '../../utils/initAElf';

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    wallet: {
        fontSize: 18,
        margin: 20
    },
    balance: {
        fontSize: 20,
        margin: 20
    }
});

export default class MultiTokenTransfer extends Component {

    constructor(props) {
        super(props);
        const defaultPrivateKey = 'a59c14882c023d63e84e5faf36558fdc8dbf1063eed45ce7e507f1cd9bcde1d9';
        this.wallet = aelf.wallet.getWalletByPrivateKey(defaultPrivateKey);
        this.state = {
            wallet: {
                address: this.wallet.address
            },
            value: null,
            address: null,
            balance: null,
            multiTokenContract: null
        };
    }

    componentDidMount() {
        // aelf.chain.getBlockHeight((error, result) => {
        //     this.setState({
        //         balance: result
        //     });
        // });
        aelf.chain.contractAtAsync(config.multiTokenAddress, this.wallet, (error, result) => {
            this.setState({
                multiTokenContract: result
            });
            this.getbalance();
        });
    }

    getbalance() {
        const {wallet, multiTokenContract} = this.state;
        console.log(multiTokenContract);
        const payload = {
            symbol: 'ELF',
            owner: wallet.address
        };
        multiTokenContract.GetBalance.call(payload, (error, result) => {
            console.log(result);
            if (result) {
                this.setState({
                    balance: result.balance
                });
            }
        });
    }
    onClick() {
        const {multiTokenContract} = this.state;
        const payload = {
            to: this.state.address,
            amount: this.state.value,
            symbol: 'ELF'
        };
        multiTokenContract.Transfer(payload, (error, result) => {
            this.setState({
                address: null,
                value: null
            });
            setTimeout(() => {
                this.getbalance();
            }, 4000);
        });
    }

    render() {
        const {wallet, balance} = this.state;
        return (
            <View>
                <Text style={styles.title}>该页面仅供测试使用</Text>
                <Text style={styles.wallet}>Your Wallet: {wallet.address}</Text>
                <Text style={styles.balance}>Balance: {balance} ELF</Text>
                <InputItem
                    clear
                    value={this.state.value}
                    onChange={value => {
                        this.setState({
                            value
                        });
                    }}
                    extra="ELF"
                    placeholder="转账数量"
                ></InputItem>
                <InputItem
                    clear
                    value={this.state.address}
                    onChange={address => {
                        this.setState({
                            address
                        });
                    }}
                    placeholder="接收地址"
                ></InputItem>
                <Button
                    type="primary"
                    onPress={() => this.onClick()}
                >
                    确认转账
                </Button>
            </View>
        );
    }
}
