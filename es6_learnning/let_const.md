# let和const
## let
###基本概念和用法
let是es6新增命令，只在其代码块内有效，具有块级作用域
```
{
	let a = 3;
	var b = 4;
}
a;//ReferenceError: a is not defined
b;//4
```
let只在其作用域有效，所以会报错
```{
   	let a = 3;
   	var b = 4;
   	a;//3
   }

```
for循环输出的时候就不用担心变量改变了
```
for(let i=0;i<3;i++){
	setTimeout(function(){
		console.log(i);
	},i*100)
}
//1 
//2
//3
```
for循环中，设置变量的那部分是一个作用域，里面内容又是一个作用域
```
for(let i=0;i<3;i++){
	let i = 4;
	setTimeout(function(){
		console.log(i);
	},i*100)
}
//4
//4
//4
```
### 不存在变量提升
变量不能再声明之前就去使用它
```
console.log(ab);//undefined
var ab = 3;
console.log(ab);//3
//------------
console.log(abc);//ReferenceError: abc is not defined
let abc = 3;
```

### 暂时性死区
只要在块级作用域内存在`let`命令，它所声明的变量就会“绑定”这个区域，不在受外部影响
```
var a =3;
if(true){
    a =2;//报错，未定义就使用
    let a;
}
```
### 不需要重复的声明
```
function b(a){
    let a;//报错
}
function b(a){
    let a = 10;
    let a = 2;//error
    var a = 2;//error
}
```
## const 命令

### 基本概念和用法
`const`声明一个只读的常量，即声明后不能改变
```
const pi = 3.14159265354;
pi;//3014159265354
pi = 3.14;//TypeError: Assignment to constant variable.
```
`const`声明的变量必须立刻初始化
```
const ab;// Missing initializer in const declaration
```
### const本质
const保证的是不是变量的值不可改动，而是其指向的指针不可改变，对于简单数据类型来说
，值就是变量指向的那个内存地址，对于引用型数据类型来说，是指针，只要指针不变就可以。
```
const obj = {};//可以
obj.a = 1;
obj.c =2;
obj ={};//TypeError: Assignment to constant variable.
const arr = [];
arr[1] = 2;//[empty,2]
arr.length = 0;//[];
arr = [];//TypeError: Assignment to constant variable.
```

