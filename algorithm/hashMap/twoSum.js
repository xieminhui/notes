/*
 * @Date: 2020-05-21 10:44:41
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-21 10:59:00
 * @description:
 */

// 输入 nums = [3,1,3,6], target = 6，算法应该返回数组 [0,2]，因为 3 + 3 = 6。

// 解法一就是暴力穷举，时间复杂度时O(n2)


// 这题的本质是让我们学会使用map的方式来降低时间复杂度
// 算法的时间和空间总是互斥的，当时间复杂度较高时，我们可以考虑牺牲空间来换取时间复杂度的降低
// 用map 之后，时间复杂度变为O(n);多了O(N)的空间复杂度
function twoSUm (arr, target) {
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  for (let i = 0; i < arr.length; i++) {
    let res = target - arr[i];
    if (map.has(res) && map.get(res) !== i) {
      return [i, map.get(res)];
    }
  }
  return [-1, -1]
}
let res = twoSUm([3, 1, 3, 6], 6);
console.log(res);