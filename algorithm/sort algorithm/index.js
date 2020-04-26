/*
 * @Date: 2020-04-26 10:52:27
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-26 10:55:48
 * @description:
 */


const { bubbleSort } = require('./bubbleSort')
const { insertSort } = require('./insertSort')
const { mergeSort } = require('./mergeSort')
const { quickSort } = require('./quickSort')
const { selectSort } = require('./selectSort')


module.exports = {
  bubbleSort,
  insertSort,
  mergeSort,
  quickSort,
  selectSort
}