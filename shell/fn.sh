
###
 # @Author: your name
 # @Date: 2022-02-11 17:23:12
 # @LastEditTime: 2022-02-11 17:44:48
 # @LastEditors: Please set LastEditors
 # @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 # @FilePath: \notes\shell\fn.sh
### 
#!/bin/bash

x=10
y=20
addFn()
{
    sum=`expr ${x} + ${y}`;
    return ${sum};
} 
addFn
ret=$? 
echo "addFn = x + y => ${ret}"

fnWithParams(){
    a=$1
    b=$2
    echo "fnWithParams接收到两个参数a, b: ${a}, ${b}"
    return $((${a}-${b}));
}

echo "执行fnWithParams"
fnWithParams 20 10
ret=$? 
echo "fnWithParams= x - y => ${ret}"
