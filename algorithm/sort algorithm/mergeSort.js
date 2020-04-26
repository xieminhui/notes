/*
 * @Date: 2020-04-26 10:17:27
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 10:53:15
 * @description:
 */


// 归并排序
// 

/**
 * @description: 
 * @param {Array} 
 * @return: 
 */
function mergeSort (arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }

  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

/**
 * @description: 合并两个已经排序的数组,时间复杂度O(n),因为O(2n), 2n ——》 n,
 * @param {Array} 
 * @param {Array} 
 * @return: 
 */

function merge (left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  // 经过上面，不是left空了，就是right空了
  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.pusn(right.shift())
  }

  return result;
}


module.exports.mergeSort = mergeSort;