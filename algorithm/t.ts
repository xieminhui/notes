/*
 * @Author: your name
 * @Date: 2021-12-26 13:05:41
 * @LastEditTime: 2021-12-27 18:31:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \notes\algorithm\t.ts
 */


function numFriendRequests(ages: number[]): number {
    let ret:number = 0;
    for(let x = 0; x < ages.length; x++) {
    for(let y = x + 1; y < ages.length; y++) {
        if(!(ages[y] <= 0.5 * ages[x] + 7 || ages[y] > ages[x] || ages[y] > 100 && ages[x] < 100)) {
            ret++
        }
        if(!(ages[y] <= 0.5 * ages[x] + 7 || ages[x] > ages[y] || ages[x] > 100 && ages[y] < 100)) {
            ret++
        }
    }
    }
    return ret;
};

numFriendRequests([16,17,18])

function getProperty<Type1, Key extends keyof Type1>(obj: Type1, key: Key) {
    return obj[key];
  }
   
  let x = { a: 1, b: 2, c: 3, d: 4 };
   
  getProperty(x, "a");
  getProperty(x, "m");


  const APP = ['TaoBao', 'Tmall', 'Alipay'];
  type a1= keyof x;
  interface a {
    [a:number] : string;
  }
  type app =  typeof APP[number];
         
  const a1:a = ['1','2']