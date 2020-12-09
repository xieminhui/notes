/*
 * @Date: 2020-10-10 10:32:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 11:21:12
 * @description: 
 */


// 函数重载
// 解决不同参数类型运算

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x): any {
  if (typeof x === 'object') {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1);

let pickedCard2 = pickCard(15);
console.log(pickedCard2)

