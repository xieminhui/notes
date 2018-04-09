### 1.函数不设置return，默认返回undefined。

### 2.mvvm框架实现数据绑定的做法大概有3种：
>发布者-订阅者模式也叫观察者模式(backbone.js)

>脏值检查(angular.js)

>数据劫持(vue.js)

**观察者模式：** 就是注册函数和触发函数过程，当数据变动时去触发函数。


**脏值检查:** angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 `setInterval()` 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：

- DOM事件，譬如用户输入文本，点击按钮等。( ng-click ) 
- XHR响应事件 ( $http ) 
- 浏览器Location变更事件 ( $location ) 
- Timer事件( $timeout , $interval ) 
- 执行 $digest() 或 $apply()

**数据劫持:** vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。
    
### 3.函数科里化：就是将多参函数转化为一系列使用一个参数的函数的技术。
    用途：延迟计算，因为将多参累计之后再计算;函数复用性提高，即不用书写多个类似函数用于相同的计算。
    
   [科里化函数详解](https://github.com/mqyqingfeng/Blog/issues/42)
