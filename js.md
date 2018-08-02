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
### 5.正则表达式：  
#### 正则表达式的先行断言和后行断言有四种：  
```
(?=pattern)零宽正向先行断言
(?!pattern)零宽负向先行断言
(?<=pattern)零宽正向后行断言
(?<!pattern)零宽正向后行断言
匹配字符中的某些字符，但是不占用字符，所以叫零宽
```  
- `(?=pattern)`正向先行断言  
匹配字符串某个位置，紧跟后面的字符串能够匹配pattern。  
`a stupid student study JavaScript`匹配`student`中的`stu`，但不能匹配上`stupid`中的`stu`，可以这样写`stu(?=dent)`；这样就匹配了
`student`但是又没有消耗`dent`。
- `(?!pattern)`负向先行断言  
匹配字符串某个位置，紧跟后面的字符串不能匹配pattern。  
`a stupid student study JavaScript`匹配除了`stupid student`之外的`stu`，可以写成`'a stupid student study JavaScript'.match(/stu(?!pid|dent)/)
`
- `(?<=pattern)`正向后行断言  
匹配字符串某个位置，紧跟前面的字符串匹配`pattern`  
`a stupid student study estuarine oceanography`匹配单词内部的`stu`,可以写成`(?<=\w)stu`;`\w`
表示匹配除了空格和换行之外的单词。
- `(?<!pattern)`负向后行断言  
匹配字符串某个位置，紧跟前面的字符串不能匹配pattern  
`a stupid student study estuarine oceanography`匹配单词开头的`stu`，可以写成`(?<!\w)stu`.
#### 正则表达式的非捕获性分组(?:)
`?:`会作为匹配校验，并出现在匹配结果字符里面，它跟(...)不同的地方在于，
不作为子匹配返回。
JavaScript权威指南写到，`(?...)`只组合，把项组合到一个单元，但不记忆与改组相
匹配的字符。
```angular2html
var data = 'windows 98 is ok';
data.match(/windows (?=\d+)/);  // ["windows "]
data.match(/windows (?:\d+)/);  // ["windows 98"]，没有放回与98相符合的字符串，但是他又匹配了98
data.match(/windows (\d+)/);    // ["windows 98", "98"]
```

### 6.[js隐式类型转换](https://github.com/jawil/blog/issues/5)

### 7.[有点意思的js继承](https://www.cnblogs.com/Watcher/p/3925036.html)
```
/*
 * 简单的 JavaScript 集成实现
 *
 * 使用 Class 来创建基类
 * 使用基类的 extend 方法实现继承
 * Demo:
 * var Foo = Class.extend({
     * name: 'foo',
     * getName: function() {
         * return this.name;
     * }
 * });
 *
 * var Bar = Foo.exntend({
     * name: 'bar',
     * getName: function() {
         * return 'name is:'+this._super();
     * }
 * });
 */

/* Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype

define(function(require, exports, module){
    var initializing = false;
    var fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

    /*
     * 将 superProxy 提出来以优化性能
     * 性能优化 log 见
     * http://jsperf.com/johnresig-class-extend
     */
    function superProxy(_super, fn) {
        return function() {
            // make a copy of this._super
            var tmp = this._super;//把子类的_super保存起来

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super;//父类的方法给子类

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);//改变了this._super后，用apply的话就是执行父类的方法了        

            // revert this._super
            this._super = tmp;//执行完毕后还原

            return ret;
        };
    }

    // The base Class implementation (does nothing)
    var Class = function(){};

    // Create a new Class that inherits from this class
    Class.extend = function(prop) {
        var _super = this.prototype;

        // Instantiate a base class (but only create the instance,
        // don't run the init constructor)
        initializing = true;
        var prototype = new this();
        initializing = false;

        // Copy the properties over onto the new prototype
        for (var name in prop) {
            // Check if we're overwriting an existing function
            prototype[name] = typeof prop[name] == "function" 
                              && typeof _super[name] == "function" 
                              && fnTest.test(prop[name]) 
                              ? superProxy(_super[name], prop[name]) 
                              : prop[name];
        }

        // The dummy class constructor
        function Class() {
            // All construction is actually done in the init method
            if ( !initializing && this.init )
            this.init.apply(this, arguments);
        }
        
        // Populate our constructed prototype object
        Class.prototype = prototype;

        // Enforce the constructor to be what we expect
        Class.constructor = Class;

        // And make this class extendable
        Class.extend = arguments.callee;

        return Class;
    };

    return Class;
});


```
难理解的地方就是那个`superProxy`的继承那里，他的作用就是当一个父类有一个函数`init(...)`，父类的子类也有这个函数`init(){this._super();this.a = 2;}`，并且这个子类写了`this._super()`时，表示子类要用父类`init()`，用于继承相同的操作，子类不用重写一次，然后再执行自己的方法。