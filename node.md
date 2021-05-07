### egg多进程模型
egg有三类进程，master,agent,worker

+ maser不参与业务逻辑，只负责管理worker和agent
+ agent，master的秘书，处理公共事务，如日志收集。
+ worker，打工仔，负责业务逻辑操作，处理请求等。

worker如果异常退出，master会回收相关资源，并且再创建一个新的worker。

### node多进程
+ 可通过process.fork,process.spawn等api创建。
+ nodejs封装的cluster模块

多进程如何通信？
+ 原生提供的方法，进程间有send和onmessage事件，提供发送消息和监听消息
+ 消息队列，类似与前端的发布订阅模式，借助消息队列通信
+ 句柄，句柄其实就是对内存资源的一种描述，想资源描述符。我的理解是，两个进程对内存中一个资源进行标识，然后两个进程通过对资源的读写，来实现通信。
+ http请求，websocket.