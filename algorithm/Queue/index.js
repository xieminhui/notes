/*
 * @Date: 2020-04-23 15:12:14
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-23 15:53:37
 * @description:
 */

// define Queue
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
  else {
    return false;
  }
}

module.exports.Queue = Queue