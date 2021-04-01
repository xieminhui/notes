## jsbridge


### h5调用客户端
+ native注入api到h5
  
  客户端注入一个全局的方法到h5 postMessage,h5直接可调用这个方法;安卓跟ios可能需要区分平台
  ```
    // bridgeName表示你要用的客户端的方法，比如播放音乐
    window.postMessage(bridgeName)

  ```
+ url scheme
  
  客户端自定义一个伪链接，然后通过iframe或location来触发
  ```
    // myLink://playMusic?id=1
    
    // iframe方式，响应快，url长度无限制
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'myLink://playMusic?id=1';
    document.documentElement.appendChild(WVJBIframe);

    // location,长度可能有所限制，时间比较慢
    location.href = 'myLink://playMusic?id=1

  ```
  

###  native调用h5
native调用客户端方式就简单了，无论是安卓还是ios，客户端都可以拿到webview对象。Native 调用 JavaScript，其实就是执行拼接 JavaScript 字符串，从外部调用 JavaScript 中的方法，因此 JavaScript 的方法必须在全局的 window 上。

```
webView.loadUrl("javascript:" + javaScriptString);

```

### h5调用客户端回调
h5执行调用客户端后，native如何执行回调呢？

结合上面的说的，其实就是h5调用客户端后，客户端执行你给它的callback就可以了，就跟jsonp一样，你可以把h5当作浏览器，native当作是服务器。

为了解决回调参数命名问题，我们可以用一个id存储callbacks,代码简单如下：
```
(function () {
    var id = 0,
        callbacks = {};

    window.JSBridge = {
        // 调用 Native
        invoke: function(bridgeName, callback, data) {
            // 判断环境，获取不同的 nativeBridge
            var thisId = id ++; // 获取唯一 id
            callbacks[thisId] = callback; // 存储 Callback
            nativeBridge.postMessage({
                bridgeName: bridgeName,
                data: data || {},
                callbackId: thisId // 传到 Native 端
            });
        },
        // 这个就是natvie回调h5,我们在这里收到它的回到，接着执行判断，找出对应的回调函数执行
        receiveMessage: function(msg) {
            var bridgeName = msg.bridgeName,
                data = msg.data || {},
                callbackId = msg.callbackId; // Native 将 callbackId 原封不动传回
            // 具体逻辑
            // bridgeName 和 callbackId 不会同时存在
            if (callbackId) {
                if (callbacks[callbackId]) { // 找到相应句柄
                    callbacks[callbackId](msg.data); // 执行调用
                }
            } elseif (bridgeName) {

            }
        }
    };
})();
```