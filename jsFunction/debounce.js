/*
 * @Date: 2021-03-09 15:27:33
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-09 15:31:27
 * @description: 
 */

 function debounce(fn, time) {
   let timer = null;
   return function () {
     let context = this;
     if(timer) clearTimeout(timer)
     timer = setTimeout(() => {
       fn.apply(context);
     }, time);
   }
 }

function test () {
  console.log(1);
}

 var db = debounce(test, 100);
 db();
 db();
 db();