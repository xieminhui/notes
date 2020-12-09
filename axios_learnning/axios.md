# axios拦截请求原理
```
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });
```
中间件原理类似，将函数存如chain中，接着形成promise的链式调用
```
  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }
```
调试过程中可以看到chain是这样的
```
0:ƒ (config) {\r\n    console.log('before request');\r\n    return config;\r\n}
1:undefined
2:ƒ dispatchRequest(config)
3:undefined
4:ƒ (res) {\r\n    console.log('before response');\r\n    return res;\r\n}
5:undefined
length:6
__proto__:Array(0)
```
形成的promise的链式调用就是这样
```
promise.then(请求拦截器的成功方法, 请求拦截器的失败方法)
        .then(dispatchRequest, undefined)
        // promise特点，dispatchRequest返回promse，下面的then，必须等到这个promise resolve才能执行
        .then(响应拦截器的成功方法, 响应拦截器的失败方法)
```