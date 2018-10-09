### 1. for循环中将length赋值给变量,像普通的变量还好，但是如果是比较dom这种数据类型的话，就会变慢很多，毕竟操作dom可是比较费时的。
```
for(let i = 0, max = arr.length; i < max; i++;) {
   ...
}

```

### 2. 编码风格

+ 缩进，一般用二或四个，但是netease习惯用三个空格。
+ 大括号，不管有没有必要省略，都加上去。
```
   //if，for只有一行语句是可以省略，但不建议
   if(true) alert(1);
   //better
   if(true) {
      alert(true);
   }
```
+ 空格，使用空格分割代码
```
//for语句各个部分后面
for(let i = 0, length = arr.length; i < length; i++) {
   ...
}

//数组项
let arr = [1, 2, 3];

```

+ 构造函数首字母大写
```
var func1 = new TestFunction();

```
+ 驼峰法命名函数和变量
```
//构造函数用大驼峰
myConstructor();

//普通函数和变量用小驼峰
countApple();
var userName;

```

+ 常量用大写
```
const PI = 3.14;
```

## 3. 函数
### 自定义函数(惰性函数定义)
```
var scareMe =  function () {
   console.log("boo!");
   scareMe = function () {
      console.log("double boo");
   };
};
//use it 
scareMe();//boo
scareMe();//double boo

//==========something interesting=============

// 添加一个新属性
scareMe.property = "properly";

//赋值给另一个不同名称的变量
var prank = scareMe;

//作为一个方法使用
var spooky = {
   boo: scareMe
};

//calling with a new name
prank();//boo
prank();//boo
prank.property;//properly

//calling with a method
spooky.boo();//boo
spooky.boo();//boo
spooky.boo.property;//properly

//自定义函数
scareMe();//double boo
scare.property;//undefined
```

### 即时函数，立即执行函数,本质是一个函数表达式
```
(function () {
   console.log('f**k bily');
})())
```
这个东西可以用来写模块
```
var module = (function () {
   return {
      count: 0,
      add: function () {
         this.count++;
      }
   }
})();
console.log(module.count);//0
module.add();
console.log(module.count);//1

```

### 初始化时分支
初始化时分支是一种优化模式，当某个条件在整个程序周期内都不会改变时，我们只对其做一次测试就好。
```
var utils = {
   addListener: (el, type, fn) => {
      if(typeof window.addEventListener === 'function') {
         el.addEventListener(type, fn, false);
      } else if (typeof document.attachEvent === 'function') {
         el.attachEvent('on' + type, fn);
      }else  {
         el['on' + type] = fn;
      }
   },
   removeListener :() => {
      ...
   }
}

//代码效率低下，每次都要进行检查

var utils = {
   addListener: null,
   removeListener: null
};
if(typeof window.addEventListener === 'function') {
   utils.addListener = function (el, type, fn) {
      el.addEventListener(type, fn, false);
   }
   utils.removeListener(type, fn, false);
}else if(typeof document.atttachEvent === 'function') {
   utils.addListener = function(el, type, fn) {
      el.attachEvent('on' + type, fn);
   }
   utils.removeListener = function (el, type, fn) {
      el.detachEvent('on' + type, fn);
   } else {
      utils.addListener = function (el, type, fn) {
         el['on' + type] = fn;
      }
      utils.removeListener = function (el, type, fn) {
         el['on' + type] = null;
      }
   }
}
```
