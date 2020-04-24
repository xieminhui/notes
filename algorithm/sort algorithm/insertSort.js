/*
 * @Date: 2020-04-24 17:32:12
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-24 17:32:22
 * @description:
 */



// 插入排序
// 在已经排序从后向前扫描，找到相应位置插入，在扫描过程中，需要不断把已经排序过的元素逐步往后移动，为新元素提供插入空间
// 默认第一个是已经排序好的

/**
 * @description: 
 * @param {Array} 
 * @return: 
 */

function insertSort (arr) {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        // 效果跟选择插入一样，原理就是交换两个元素的位置，如果插入的比已排序的小，交换两个的位置，在让插入的元素跟后一个比较
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}