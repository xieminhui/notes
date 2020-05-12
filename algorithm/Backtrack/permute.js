/*
 * @Date: 2020-05-12 14:19:17
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-12 14:34:00
 * @description:
 */

// 全排列
// 给定一个不重复的list,求出全排列

//  for 选择 in 选择列表:
//  # 做选择
//  将该选择从选择列表移除
//  路径.add(选择)
//  backtrack(路径, 选择列表)
//  # 撤销选择
//  路径.remove(选择)
//  将该选择再加入选择列表

function permute (nums) {
  let res = new Array();

  function backtrack (path) {
    if (nums.length === path.length) {
      res.push(path);
      return;
    }

    for (let num of nums) {
      if (path.includes(num)) {
        continue;
      }
      path.push(num);
      backtrack(path.slice());
      path.pop();
    }

  }
  backtrack([]);
  return res;
}

console.log(permute([1, 2, 3]))