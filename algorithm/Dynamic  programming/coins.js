/*
 * @Date: 2020-04-21 10:06:04
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-08 09:59:11
 * @description: 
 */


// # 给你 k 种面值的硬币，面值分别为 c1, c2 ...ck，每种硬币的数量无限，
// # 再给一个总金额 amount，问你最少需要几枚硬币凑出这个金额，
// # 如果不可能凑出，算法返回 - 1

// # 动态规划
// # 确定状态：即原问题和子问题变化的变量。 由于硬币数量是无限的，唯一的状态就是目标金额
// # 确定dp函数或数组的定义： 求出组成给定金额需要的最少硬币dp(n)
// # 确定选择并择优：对于每个状态，可以做出什么选择改变当前的状态。具体到问题就是，从coins选择一个硬币，目标金额就会减少。
// # 确定base case: 我觉这个应该可以说是终止状态。目标金额是0，硬币就是0，目标金额是 < 0，就会无解
// # 本质是穷举，难点是列出状态转移方程，状态转移方程就是穷举的数学形式

// # 本问题的状态转移方程
// #          
//             { 0, n = 0;
// #   dp(n) = { - 1, n < 0;
// #           { min{ dp(n - coin) + 1 | coin -> 无穷 } ， n > 0




function coinChange (coins, amount) {
    // # 求出组成金额n需要的最少硬币是多少

    function dp (n) {
        //  base case
        if (n == 0)
            return 0
        if (n < 0)
            return -1
        // # 求最小值，所以初始化为正无穷
        var res = Infinity;
        for (let coin of coins.values()) {
            subproblem = dp(n - coin)
            // # 子问题无解，跳过
            if (subproblem == -1)
                continue
            res = Math.min(res, 1 + subproblem)
        }
        res = res === Infinity ? -1 : res;
        return res;
    }

    return dp(amount)
}



res = coinChange([1, 2, 5], 11)

console.log(res);

// # 上面算法时间复杂度是O(n ^ k)
// # 优化方式就是记录已经遍历过的子问题，用备忘录

function coinChange1 (coins, amount) {
    // # 求出组成金额n需要的最少硬币是多少
    // # 备忘录
    var memo = {};

    function dp (n) {

        if (memo[n]) return memo[n];

        //  base case
        if (n == 0)
            return 0
        if (n < 0)
            return -1
        // # 求最小值，所以初始化为正无穷
        var res = Infinity;
        for (let coin of coins.values()) {
            subproblem = dp(n - coin)
            // # 子问题无解，跳过
            if (subproblem == -1)
                continue
            res = Math.min(res, 1 + subproblem)
        }
        memo[n] = res = res === Infinity ? -1 : res;
        return memo[n];
    }

    return dp(amount)
}
