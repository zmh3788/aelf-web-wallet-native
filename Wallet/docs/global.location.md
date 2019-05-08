I met this problem too, but I came up with a solution.

Because location is empty in global

```javascript
    var defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''
```

I found this in the compiled code, which led to my HTTP request not being sent because there was no location in the global, which led to my code catching directly.

So I came up with a temporary solution, which is to manually inject location or change the compiled code. Of course, the former is more flexible.

```JavaScript
    config = {
        protocol: 'http:' // 'https'
    }

    global.location = {
        protocol: config.protocol
    };
```
Before react-native initialization, inject location into global.

or

```JavaScript
    var defaultProtocol = null;
    if (global.location) {
        defaultProtocol = global.location.protocol.search(/^https?:$/) === -1 ? 'http:' : ''
    }
    else {
      defaultProtocol = 'http:'
    }
```

Or go directly to the compiled code to find the code and change it.

I hope this will help you.



