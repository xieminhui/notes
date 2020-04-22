/*
 * @Date: 2020-04-21 16:08:08
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-22 10:19:49
 * @description:
 */


// 确定状态：状态有两个：背包容量跟是可选择的物品
// 确定选择： 放入或不放入背包，放入背包后是怎么样的，不放入背包又是怎么样，两者择优
// 确定dp数组含义：状态有两个，那么dp就是二维数组，
// dp[i][w] 的定义如下：对于前 i 个物品，当前背包的容量为 w，这种情况下可以装的最大价值是 dp[i][w]
// base case：dp[0][...] = dp[...][0] = 0, 表示没有物品或者背包没有容量时，价值为0

// =======================难点==================================
// 状态转移：
// 1. 如果没有把第 i 件物品放入背包，那么它的最大价值就是 dp[i-1][w]
// 2. 第 i 件物品放入背包，dp[i][w] = dp[i-1][w - wt[i-1]] + val[i-1],
// i- 1表示前i-1件物品， w- wt[i-1]表示除去当前这件物品的容量时，放前i-1件物品背包的容量
// dp[i-1][w - wt[i-1]]这里表示前i-1物品，容量为(w-wt[i-1])的最大价值。


/*
 * 背包问题
 * 一个可装载重量为 W 的背包和 N 个物品，每个物品有重量和价值两个属性。
 * 其中第 i 个物品的重量为 wt[i]，价值为 val[i]，现在让你用这个背包装物品，
 * 最多能装的价值是多少？
*/


/**
 * @description: 
 * @param {Number} w 背包可装重量
 * @param {Number} n 物品可装个数
 * @param {Array}} wt 每个物品对应的重量
 * @param {Array} val 每个物品对应的价值
 * @return: 最大价值
 */



function knapsack (W, N, wt, val) {
  // base case 已初始化
  let dp = new Array(N + 1);
  dp[0] = new Array(W + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let w = 1; w <= W; w++) {
      if (!dp[i]) dp[i] = new Array(W + 1).fill(0);
      if (w - wt[i - 1] < 0) {
        // 这种情况下只能选择不装入背包
        dp[i][w] = dp[i - 1][w];
      } else {
        // 装入或者不装入背包，择优
        //dp[i - 1][w - wt[i - 1]]
        dp[i][w] = Math.max(dp[i - 1][w - wt[i - 1]] + val[i - 1],
          dp[i - 1][w]);
      }
    }
  }

  return dp[N][W];
}

console.log(knapsack(4, 3, [2, 1, 3], [4, 2, 3]))