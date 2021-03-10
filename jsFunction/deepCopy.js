/*
 * @Date: 2021-03-01 10:52:28
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-03-10 10:29:31
 * @description: 
 */

 function deepCopy (obj, arr = []) {
   if(typeof obj !== 'object') return 0;
   const tmp = obj instanceof Array ? [] : {};
   const index = arr.indexOf(obj);
   if( index !== -1 ) return arr[index];
   for(let key in obj) {
     if(obj.hasOwnProperty(key)) {
       if(typeof obj[key] !== 'object') {
         tmp[key] = obj[key];
       }else {
         arr.push(obj[key]);
         tmp[key] = deepCopy(obj[key], arr);
       }
     }
   }
   return tmp;
 }

 const obj = {a:1, b:2,fn:function(){console.log('fn')}, c: {d:1}};
 obj.o = obj;
 const arr = [1,2];
 const copy1 = deepCopy(obj);
 const copy2 = deepCopy(arr);
 copy1.c = 3;
 copy2.push(3);
 console.log('copy1', 'copy2');
 console.log(copy1, copy2)
 console.log('obj', 'arr');
 console.log(obj, arr)
 console.log('end')