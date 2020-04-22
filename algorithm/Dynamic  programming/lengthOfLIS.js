/*
 * @Date: 2020-04-21 11:47:49
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-22 17:15:01
 * @description: 
 */


// 最长递增子序列
// 确定状态：数组下标i的值是否比前i-1的值大
// 确定选择：数组下标i比前i-1的值大，找出其中最大的连续递增子序列，加我自己（+1），否则就是自己的长度（1）
// 确定dp数组：一个状态，dp数组就是一维数组
// dp[i]表示以nums[i]结尾的最长递增子序列
// 状态转移：即每个选择会对状态造成的影响，数组下标i比前i-1的值大，找出其中最大的连续递增子序列，加我自己（+1），否则就是自己的长度（1）
// base case: 数组下标i遍历到最后了
function lengthOfLIS (nums) {

    // # dp 数组全都初始化为 1
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }

    // 取出dp[i]中最大的值就是答案    
    let res = 0
    for (let i = 0; i < dp.length; i++) {
        res = Math.max(res, dp[i])
    }
    return res
}


// input : [10, 9, 2, 5, 3, 7, 101, 18]
// ouput: 4
// 最长递增子数列 2，3，7，101

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));