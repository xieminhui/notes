/*
 * @Date: 2020-05-11 14:51:15
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-05-11 17:34:11
 * @description:
 */


// async函数是generator函数加自动执行器
// geneartor函数有了，剩下就是实现自动执行器

// es6 阮一峰

function fn (args) {
  return spawn(function* () {

  })
}

function spawn (genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step (nextF) {
      let next;
      try {
        next = nextF();
      } catch (error) {
        return reject(error);
      }

      if (next.done) {
        return resolve(next.value);
      }

      Promise.resolve(next.value).then((val) => {
        step(function () { return gen.next(val); });
      }, (e) => {
        step(function () { return gen.throw(e); })
      })
    }
    step(function () { return gen.next(undefined); })
  })
}


// test case

function fn1 () {
  return spawn(function* () {
    res = yield new Promise((resolve, reject) => {
      setTimeout(resolve(10), 100);
    });
    console.log(res);
    res1 = yield new Promise((resolve, reject) => {
      // throw Error(1);
      resolve(100)
    });
    debugger
    console.log(res1);

  })
}
fn1();