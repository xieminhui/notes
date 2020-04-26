/*
 * @Date: 2020-04-24 11:47:23
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 10:52:56
 * @description:
 */



// 冒泡排序
// 不断的交换两个元素，将大的那个浮到最后面

/**
* @description: 冒泡排序
* @param {Array} arr
* @return: 
*/

function bubbleSort (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 解构
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

module.exports.bubbleSort = bubbleSort;