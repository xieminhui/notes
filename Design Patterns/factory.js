/*
 * @Date: 2020-08-13 16:45:38
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-08-13 16:54:47
 * @description: 
 */


//  工厂模式
// 用于创建相同的对象

function person (age, name) {
  this.age = age;
  this.name = name;
  return this;
}