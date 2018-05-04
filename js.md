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
### 4.数组排序  
> sort():比较函数应该具有两个参数 a 和 b，其返回值如下：
         
         若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
         若 a 等于 b，则返回 0。
         若 a 大于 b，则返回一个大于 0 的值  
```angular2html
var drawerList = [
    {url:'../../static/images/icon/coin-etc.png',name:'ETC',zhangfu:+122.33,price:228.253,about:3.3248,state:1},
    {url:'../../static/images/icon/coin-bat.png',name:'BAT',zhangfu:-12.20,price:68.53,about:3.3248,state:0},
    {url:'../../static/images/icon/coin-gram.png',name:'GRA',zhangfu:+121.13,price:68.3223022,about:3.3248,state:1},
    {url:'../../static/images/icon/coin-eth.png',name:'ETH',zhangfu:+12.83,price:68.25232,about:3.3248,state:1},
    {url:'../../static/images/icon/coin-bat.png',name:'BAT',zhangfu:-122.03,price:12.25322232,about:3.3248,state:0},
    {url:'../../static/images/icon/coin-etc.png',name:'ETC',zhangfu:-12.13,price:68.253232,about:3.3248,state:0},
    {url:'../../static/images/icon/coin-bat.png',name:'BAT',zhangfu:-9.03,price:68.253232,about:3.3248,state:0},
]

function sortList(a, b) {
    return b.zhangfu - a.zhangfu
}
drawerList.sort(sortList)
console.log(drawerList)
```