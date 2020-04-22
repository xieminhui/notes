/*
 * @Date: 2020-04-22 16:29:53
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-22 17:39:05
 * @description:
 */

// 最小编辑距离
// 给定两个字符串s1和s2，计算s1转换成s2所使用的最少操作次数
// 你可以对一个字符串进行插入，删除，替换操作

// 确定状态：s1，s2的下标i,j的移动方式
// 确定选择： 插入还是删除还是替换最快
// 确定dp：dp用函数，dp(i, j)表示s1[0..i] 和 s2[0..j] 的最小编辑距离
// 状态转移：不同的选择操作会对下标i，j产生不同的影响
// dp(i-1, j) 表示删除操作
// dp(i, j-1) 表示插入
// dp(i-1, j-1)表示替换
// base case: i,j下标移动到 < 0, dp(0, [...])表示


function minDistance (s1, s2) {

  function dp (i, j) {
    if (i == -1) return j + 1;
    if (j == -1) return i + 1;

    if (s1[i] == s2[j]) {
      return dp(i - 1, j - 1);
    } else {
      return Math.min(
        dp(i, j - 1) + 1, // 插入
        dp(i - 1, j) + 1, // 删除
        dp(i - 1, j - 1) + 1 // 替换
      )
    }

  }
  return dp(s1.length - 1, s2.length - 1)
}

// test

console.log(minDistance('qwe', 'zxc'));