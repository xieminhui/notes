/*
 * @Date: 2021-03-01 10:52:28
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-01 10:58:48
 * @description: 
 */

 function deepCopy (obj) {
   if(typeof obj !== 'object') return 0;
   const tmp = obj instanceof Array ? [] : {};
   for(let key in obj) {
     if(obj.hasOwnProperty(key)) {
       if(typeof obj[key] !== 'object') {
         tmp[key] = obj[key];
       }else {
         tmp[key] = deepCopy(obj[key]);
       }
     }
   }
   return tmp;
 }

 const obj = {a:1, b:2,fn:function(){console.log('fn')}};
 const arr = [1,2];
 const copy1 = deepCopy(obj);
 const copy2 = deepCopy(arr);
 copy1.c = 3;
 copy2.push(3);
 console.log('copy1', 'copy2');
 console.log(copy1, copy2)
 console.log('obj', 'arr');
 console.log(obj, arr)