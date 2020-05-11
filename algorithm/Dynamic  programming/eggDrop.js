/*
 * @Date: 2020-04-30 16:11:13
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-07 14:18:45
 * @description:
 */


// 高楼扔鸡蛋，找出鸡蛋刚好不碎的楼层,最坏情况下，你至少要扔几次鸡蛋，才能确定这个楼层 F 呢？
// 楼层n,鸡蛋k个，求出最少尝试次数

// 确定状态：当前拥有的鸡蛋数k，需要测试的楼层数n
// 确定选择：选择就是去哪一层楼扔鸡蛋
// 状态转移: dp[k][n]表示在有n层楼，丢鸡蛋，鸡蛋有k个
////
////                { n, k==1, //当鸡蛋数 K 为 1 时，显然只能线性扫描所有楼层,即从第一层楼丢到最后一层，最坏情况就是到第n层了
////    dp[k][n] =  { 0，n==0, //没有楼层，扔啥鸡蛋
////                { Max(dp[k -1][i-1]), dp[k][n-i]), 0<= i <= n, 
////


function eggDrop (k, n) {
  let memo = new Map();

  function dp (k, n) {
    if (k == 1) return n;
    if (n == 0) return 0;

    // 避免重复计算
    if (memo.has(`${k}${n}`)) {
      return memo.get(`${k}${n}`);
    }

    let res = Infinity;

    for (let i = 1; i <= n; i++) {
      res = Math.min(res,
        Math.max(
          dp(k, n - i), // 蛋没碎 dp(k, n - i)比如2个鸡蛋，4层楼，现在在第2层丢鸡蛋，碎了变成dp(2,2)，其中dp(2, 2),后面这个2表示2层楼，可以是3-4，也可以是1-2，但他们结果都是一样的
          dp(k - 1, i - 1)
        ) + 1);
    }

    memo.set(`${k}${n}`, res);

    return res;
  }
  let res = dp(k, n);
  return res;
}

console.log(eggDrop(2, 4))

function timeout (ms) {
  return {
    text: 'done'
  }
}

function* start () {
  const res = yield timeout(1000);
  return res;
};




function fn (args) {
  return spawn(start);
}

function spawn (genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step (nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }


      Promise.resolve(next.value).then(function (v) {
        step(function () {
          return gen.next(v);
        });
      }, function (e) {
        step(function () {
          return gen.throw(e);
        });
      });
    }
    step(function () {
      return gen.next();
    });
  });
}

fn().then((data) => {
  console.log(data)
})
