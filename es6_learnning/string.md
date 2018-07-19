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
用于从码点返回对应字符，es5fromCharCode不能识别不能识别大于0xFFFF的码点，这个可以处理大于32位的utf-16字符,

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
除了遍历字符串，这个遍历器最大的优点是可以识别大于0xFFFF的码点，传统的for循环无法识别这样的码点。
```
let text = String.fromCodePoint(0x20bbf);
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}
// " "
// " "

for (let i of text) {
  console.log(i);
}
// "𠮷"
```
### at()
用于放回给定位置的字符串，es5的`charAt`方法类似，但是`charAt`不能识别码点大于`0xFFFF`
的字符
```
'aba'.charAt(0);//a
'𠮷'.charAt(0) // "�"
```
### normalize()
### includes(), startsWith(), endsWith()
+ includes():表示是否找到该字符串
+ startsWith():参数字符串是否在原字符串头部
+ endsWith():参数字符串是否在原字符串尾部

```
var str = "hello world"
str.includes('hell')
//true
str.startsWith('hell')
//true
str.endsWith("ld")
//true
```
这三个方法还有第二个参数，表示开始搜索的位置
```
str.startsWith('hell', 1)
//false
str.startsWith('hell', 0)
//true
str.includes('hello', 0); 
//true
str.includes('hello', 1);
//false
```
### repeat()
将原来的字符串重复几次放回，不改变原来的字符串
```
str.repeat(2)
//"hello worldhello world"
str;
//"hello world"
```
### padStart(),padEnd()
用于在开头或末尾补全字符串，接收两个参数，第一个是指定字符串最小长度，第二个
是用来补全的字符串
```
'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'
'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba'

'xxx'.padStart(2, 'ab') // 'xxx'
'xxx'.padEnd(2, 'ab') // 'xxx'
```
如果补全字符串跟原字符长度之和大于的参数的最小长度，则补全字符串会被裁剪
```
'xxxx'.padStart(5, 'ababab') // 'ababx'

//"axxxx"
```
忽略第二个参数，默认用空格补全

### matchAll()

## 模板字符串
用反引号（\` ）标识,变量写在`${}`中

```
let girl = 'lala';
let html = '<span>hello ' + girl + '</span>';

let html1 = `<span>hello ${girl}</span>`;

html
"<span>hello lala</span>"
html1
"<span>hello lala</span>"

```
模板字符串之中也可以调用函数
```
function sayHello(){
    return 'Hello';
}
`${sayHello()} lala!`
//"Hello lala!"
```
模板字符串的嵌套
```
var tmpl = city => {
    return `
    <table>
    ${city.map(value =>{
        return `
            <tr>
                <td>${value.pro}</td>
                <td>${value.cityname}</td>
            </tr>
        `
    }).join('')}	
    </table>`
};
var citys = [
    {
        pro: '广东省',
        cityname: '广州'
    },
    {
        pro: '湖北省',
        cityname: '武汉'
    }
];
tmpl(citys);
//"
      <table>
      
              <tr>
                  <td>广东省</td>
                  <td>广州</td>
              </tr>
          
              <tr>
                  <td>湖北省</td>
                  <td>武汉</td>
              </tr>
          	
      </table>"
```
## 标签模板
模板字符用于函数的参数，该函数将被调用来处理这个模板字符串，成为’标签模板‘。函数的一种
特殊调用形式，如果模板字符串里面有变量，会将模板字符串先处理成多个参数，在调用函数
```
let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);


var a = 5;
var b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}

tag`Hello ${ a + b } world ${ a * b}`;
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"
```