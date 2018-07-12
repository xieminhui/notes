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

