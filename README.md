# aelf-web-wallet-native

## 需要注意两个特别沙雕的点

### crypto.js 的问题

```shell
    npm i --save react-native-crypto
    # install peer deps 
    npm i --save react-native-randombytes
    react-native link react-native-randombytes
    # install latest rn-nodeify 
    npm i --save-dev tradle/rn-nodeify
    # install node core shims and recursively hack package.json files 
    # in ./node_modules to add/update the "browser"/"react-native" field with relevant mappings 
    ./node_modules/.bin/rn-nodeify --hack --install
```

尝试运行它们，很庆幸四年前的代码竟然还可以用。
你需要配置 shim.js 

```JavaScript
    // If using the crypto shim, uncomment the following line to ensure
    // crypto is loaded first, so it can populate global.crypto
    global.createHmac = require('crypto').createHmac;
```

看到这里你应该就明白大概什么意思了。


### .git 文件的问题

当你执行完上面的代码后，你发现 createHmac 可以用了，但是你如果想继续 install npm 包就会报错。
你要到 react-native-udp 目录下手动删除 ```.git``` 文件。

### fetch 接口请求是200 但是无法获取返回值

1. 首先可以确定请求已经发出，并且用charles抓包可以得到结果，那么问题应该出现在前端。
2. react-native js debug 模式并不能完全看到信息。推荐使用 vscode 断点调试。 控制台并未将catch的信息反馈给我 通过断点才看到catch到的错误。
3. RN 不支持 xml2-cookies 库 因为xml2-cookies 暂时不支持 [xml2-cookies](https://github.com/pwnall/node-xhr2)

因为 ```global.location``` 为 undefined  导致直接catch

解决办法：

在config中配置，需要在config中配置 protocol 为空字符串  或者 ’https:‘

* FormData
* Blob
* `file://` URIs
* `data:` URIs
* upload progress events
* synchronous operation
* Same-origin policy checks and CORS
* cookie processing

