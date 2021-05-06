/*
 * @Date: 2021-05-06 16:56:55
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-05-06 17:04:24
 * @description: 
 */


// 类型判断函数

const typeStr = "Boolean Number String Function Array Date RegExp Object Error Null Undefined";
let classType = {};

typeStr.split(' ').map(function (v) {
  classType[`[object ${v}]`] = v.toLowerCase();
})

function type (obj) {
  if(obj === null) {
    return 'null';
  }

  return typeof obj === 'object' ? classType[Object.prototype.toString.call(obj)] || 'object' : typeof obj;

}

console.log(type(function(){}))
console.log()
console.log(type({}))
console.log()
console.log(type([]))
console.log()
console.log(type(null))
console.log()
console.log(type(undefined))
console.log()
console.log(type(1))
console.log()