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
