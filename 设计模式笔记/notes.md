### 1. for循环中将length赋值给变量,像普通的变量还好，但是如果是比较dom这种数据类型的话，就会变慢很多，毕竟操作dom可是比较费时的。
```
for(let i = 0; let max = arr.length; i < max; i++;) {
   ...
}

```

### 2.编码风格

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