/*
 * @Date: 2021-03-01 11:01:33
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-01 11:22:32
 * @description: 
 */


 function curry(fn, args) {
   const len = fn.length;
  args = args || [];
   return function () {
      args = args.concat([...arguments]);
      if(args.length === len) {
        return fn.apply(this, args);
      }else {
        return curry.call(this, fn, args);
      }
   }
 }
 function add(a, b) {
   return a + b;
 }

 const fn = curry(add);
 const ret = fn(1)(2);
 console.log(ret);


 // 类似柯里化的题目
 // add(1, 2) 3
 // add(1, 2)(3) 6
 // add(1)(2)(3)(4) 10
 // add(1)...(...n)

 function sum() {
   let args = [...arguments];
   let fn = function () {
     args = args.concat([...arguments]);
     return fn;
   }
   fn.toString = function () {
     return args.reduce((a, b) => a + b);
   }
   return fn;
 }
 console.log(sum(1)(2))
 console.log(sum(1)(2)(3))
 console.log(sum(1)(2)(3, 4, 5))