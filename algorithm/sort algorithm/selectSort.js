/*
 * @Date: 2020-04-24 17:31:45
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 10:53:35
 * @description:
 */


// 选择排序
// 找到最大或者最小的那个元素，放在起始位置

/**
 * @description: 
 * @param {Array} 
 * @return: 
 */

function selectSort (arr) {
  let length = arr.length;
  let maxIndex;
  for (let i = 0; i < length; i++) {
    maxIndex = i;
    for (let j = i; j < length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];

  }

  return arr;

}

module.exports.selectSort = selectSort;