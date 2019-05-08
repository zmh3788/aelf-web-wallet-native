/**
 * @file initAElf.js
 * @author zmh3788
 * @description none
*/

import config from '../config/config';
import AElf from '../../node_modules/aelf-sdk/dist/aelf.js';
// import AElf from 'aelf-sdk';
// const AElf = require('../../node_modules/aelf-sdk/dist/aelf.js').AElf;
// const {default} = module.exports;
// console.log('module.exports', default);
// console.log('AElf', AElf);
// console.log(window.AElf);
// const AElf = window.AElf;

// TODO: import 拿不到 AElf 但是window已经被注入
const aelf = new window.AElf(
    new window.AElf.providers.HttpProvider(
        config.defaultChain, // https://127.0.0.1:8000/chain
        null,
        null,
        null,
        [{
            name: 'Accept',
            value: 'text/plain;v=1.0'
        }]
    )
);

export default aelf;

//  const aelf = null;
