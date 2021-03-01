/*
 * @Date: 2021-03-01 10:45:58
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-01 10:50:45
 * @description: 
 */


 function shallowCopy (obj) {
  if (typeof obj !== 'object') return;
   let tmp = obj instanceof Array ? [] : {};
   for(let key in obj) {
     if(obj.hasOwnProperty(key)) {
       tmp[key] = obj[key]
     }
   }
   return tmp;
 }

 const obj = {a:1, b:2};
 const arr = [1,2];
 const copy1 = shallowCopy(obj);
 const copy2 = shallowCopy(arr);
 console.log(copy1, copy2)