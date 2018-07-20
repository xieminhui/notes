# 函数的扩展
##函数参数的默认值

### 基本用法
es6之前，不能直接为函数的参数指定默认值，但是可以用其他方式实现
```
function say(x){
    x = x || 'xiaoming';
    console.log('hello' + x);
}
``` 
es6写法
```
function say(x = 'xiaoming'){
    console.log('hello' + x);
}
```
注意参数给默认值时，参数会默认声明，所以你不能在函数里面再次声明，会报错
```
function say(x = 'xiaoming'){
    let x = 'a';//Identifier 'x' has already been declared
    console.log('hello' + x);
}

```
### 与解构赋值默认值结合使用

```
function foo({x, y = 5}) {
  console.log(x, y);
}

foo({}) // undefined 5 {x, y = 5} = {}
foo({x: 1}) // 1 5 {x, y = 5} = {x: 1}
foo({x: 1, y: 2}) // 1 2  {x, y = 5} = {x: 1, y: 2}
foo() // TypeError: Cannot read property 'x' of undefined
```
只有当函数参数是对象时才能解构完成
```
function foo({x, y = 5} = {}) {
  console.log(x, y);
}

foo() // undefined 5
```
上面代码表示没有给参数对象时，默认给个空对象
另外一个解构的例子
```
function fetch(url, {body ='', method = 'GET', headers = {} }){
    console.log(method);
}
fetch('12', {});
//GET
fetch('12');
//Cannot destructure property `body` of 'undefined' or 'null'.
```
不能省略第二参数，改造下
```
function fetch(url, {body ='', method = 'GET', headers = {} } = {}){
    console.log(method);
}
fetch('12');
//GET
```
### 函数的length属性
指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。
也就是说，指定了默认值后，length属性将失真。
```
(function (a) {}).length // 1
(function (a = 5) {}).length // 0
(function (a, b, c = 5) {}).length // 2
```

