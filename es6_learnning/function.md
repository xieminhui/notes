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