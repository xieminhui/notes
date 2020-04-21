/*
 * @Date: 2020-04-21 11:47:49
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-04-21 15:39:59
 * @description: 
 */


// 最长递增子序列
//  dp[i]表示以nums[i]结尾的最长递增子序列

function lengthOfLIS (nums) {

    // # dp 数组全都初始化为 1
    let dp = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }

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