/*
 * @Date: 2020-08-13 16:08:43
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-08-13 16:17:31
 * @description: 
 */

// 单例模式

// 1. 使用函数属性

function Universe () {
  if (typeof Universe.instance === "object") {
    return Universe.instance;
  }

  this.start_time = 0;

  Universe.instance = this;

  return this;
}

var uni1 = new Universe();
var uni2 = new Universe();


//  闭包中的实例，重写构造函数的方式

function Universe () {
  var instance = this;
  this.start_time = 0;

  Universe = function () {
    return this;
  }
}

