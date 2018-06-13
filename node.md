### 1. express
> app.use使用router的时候要注意path这个问题。像下面的代码，如果use router加了路径，
那么在前端访问的url的时候就要加上use的那个路径。
```angular2html
//routert.js
router.get('/', function(req, res) {
  
});
router.post('/test', function(req, res) {
});

//这个是nodejs run 的js,姑且叫app.js

//开启一个服务器
var app = express();
var router = require('./router');
...
app.use('/user', router );
//可处理发自 /user和 /user/test的请求
app.use('/', router );
//可处理发自 /和 /test的请求


```
2. ### nodejs中间件
为什么要写这个呢？因为面试经常被人问中间件是什么？自己像是知道答案，但是又
不敢确定。中间件都听过了，express路由，cookie-parser，是不是觉得很吊。
这些是复杂的中间件，中间件就是一系列函数而已。你拦截到一个请求，相应之前进行
处理的一些操作，比如数据查表，存表这些。
```
var express = require('express');

var app = express();
//配置处理登陆的控制器
app.post('/loginData', function(req, res) {
//这里就是个中间件了
    console.log("接受到login页面的登陆信息");
    //调用login控制器传入req,res
    UserCtrl.login(req, res);
    next();//调用下一个中间件
}，function(){
    
});
app.listen(3000, function () {
    console.log('listen 3000...');
});
```

