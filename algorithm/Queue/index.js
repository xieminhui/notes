/*
 * @Date: 2020-04-23 15:12:14
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-12-23 22:43:24
 * @description:
 */

// define 
function Queue () {
  this.data = [];
}

/**
 * @description: 进入队列
 * @param {*} 
 * @return: 
 */
Queue.prototype.enqueue = function (ele) {
  this.data.push(ele);
}

/**
 * @description: 出队列 
 * @return: 
 */
Queue.prototype.dequeue = function () {
  return this.data.shift();
}

/**
 * @description: 放回队列是否为空
 * @return {boolean}: 
 */
Queue.prototype.isEmpty = function () {
  if (this.data.length == 0) {
    return true;
  }
 
  return false;
  
}

module.exports.Queue = Queue