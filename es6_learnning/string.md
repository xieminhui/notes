# 字符串的扩展
## 字符串Unicode表示法
JavaScript允许采用`\uxxxx`形式表示一个字符，其中`xxxx`表示字符的`Unicode`码点
```
"\u0061";//a
```
超过`\u0000~ \uFFFF`之间的字符，必须用双字节的形式表示
```
"\uD842\uDFB7"
// "𠮷"
"\u20BB7"
// " 7"
```
放入大括号内就可以正确解读了
```
"\u{20BB7}"
// "𠮷"
```
## 字符串api
### codePointAt()
返回utf-16的编码十进制码点，能够正确处理四个字节的字符

### fromCodePoint()
用于从码点返回对应字符，可以处理大于32位的utf-16字符

## 字符串的遍历器接口
字符串可以被`for...of`循环遍历
```
for(let srt of "hello"){
	console.log(srt)
}
//h
//e
//l
//l
//0
```