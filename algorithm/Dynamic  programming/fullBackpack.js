/*
 * @Date: 2020-04-28 15:15:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-28 16:43:55
 * @description:
 */


// 完全背包问题
// 有一个背包，最大容量为 amount，有一系列物品 coins，每个物品的重量为 coins[i]，每个物品的数量无限。请问有多少种方法，能够把背包恰好装满？

// 确定状态：状态是两个，背包容量和可选择的物品
// 确定选择：放入或者不放入背包 

// 确定dp数组：
//// for 状态1 in 状态1的所有取值：
// for 状态2 in 状态2的所有取值：
//    for ...
//     dp[状态1][状态2][...] = 计算(选择1，选择2...)
//// dp[i][j]表示：若只使用 coins 中的前 i 个硬币的面值，若想凑出金额 j，有 dp[i][j] 种凑法。

// 确定base case(循环终止条件)：dp[0][...] = 0, dp[...][0] = 1;
// 确定状态转移：
////              { 0, i=0;
////  dp[i][j] =  { 1, j=0;
////              { dp[i-1][j]; // 零钱i不放入背包
////              {  dp[i - 1][j] + dp[i][j - coins[i]];// 零钱放入背包
//// dp[i - 1][j]表示不用该硬币的时候， 组成j已经有那么多中做法了，再加上dp[i][j - coins[i]]就是我放入了改硬币的时候，组成j又有几种做法，

/**
 * @description: 
 * @param {Array}: 零钱的类别 
 * @param {Number}：要凑的金额
 * @return {Number}:
 */

function fullBackpack (coins, count) {
  let dp = new Array(coins.length + 1);
  dp[0] = new Array(count + 1).fill(0);
  dp[0][0] = 1;

  for (let i = 1; i <= coins.length; i++) {
    if (!dp[i]) {
      dp[i] = new Array(count + 1).fill(0);
      dp[i][0] = 1;
    }
    for (let j = 1; j <= count; j++) {
      if (j - coins[i - 1] < 0) {
        // 凑出3快， 肯定不用考虑放入5快
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - coins[i - 1]];
      }
    }
  }

  return dp[coins.length][count];
}

let res = fullBackpack([1, 2, 5], 5);
let res1 = fullBackpack([2], 3);
console.log(res, res1)
