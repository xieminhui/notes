/*
 * @Date: 2021-03-09 15:32:22
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-09 15:41:42
 * @description: 
 */


 function throttle (fn, time) {
   let timer = null;
   return function () {
     let context = this;
     if(timer) return;
     timer = setTimeout(() => {
       fn.apply(context);
       timer = null;
     }, time);
   }
 }

 function test () {
   console.log(11);
   console.timeEnd();
 }

 console.time();
 var th =  throttle(test, 1000);
 th();
 th();
 th();
