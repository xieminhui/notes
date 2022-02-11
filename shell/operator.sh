###
 # @Author: your name
 # @Date: 2022-02-11 16:50:25
 # @LastEditTime: 2022-02-11 17:10:27
 # @LastEditors: Please set LastEditors
 # @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 # @FilePath: \notes\shell\operator.sh
### 

echo "算术运算符"
x=10
y=20
sum=`expr ${x} + ${y}`
sub=`expr ${x} - ${y}`

echo "x, y = ${x}, ${y}"
echo "x + y = ${sum}"
echo "x - y = ${sum}"

echo "关系运算符"
bol=`[ ${x} -eq ${y} ]`
if [ ${x} -eq ${y} ]
then
   echo "${x} -eq ${y} : a 等于 b"
else
   echo "${x} -eq ${y}: a 不等于 b"
fi
if [ ${x} -gt ${y} ]
then
   echo "${x} -gt ${y}: a 大于 b"
else
   echo "${x} -gt ${y}: a 不大于 b"
fi