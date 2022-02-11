#!/bin/bash
###
 # @Author: your name
 # @Date: 2022-02-11 15:31:23
 # @LastEditTime: 2022-02-11 16:45:00
 # @LastEditors: Please set LastEditors
 # @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 # @FilePath: \electron-vue-projectc:\Users\netease\Desktop\test.sh
### 

echo "Shell 传递参数实例！";
echo "执行的文件名：$0";
echo "第一个参数为：$1";
echo "第二个参数为：$2";
echo "第三个参数为：$3";
echo "$*"

var1=1
echo "变量var1值为${var1}"

echo "数组类型"
arr=(1 2 3 "str")
echo "数组arr值：${arr[@]}"