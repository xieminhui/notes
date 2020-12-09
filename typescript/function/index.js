/*
 * @Date: 2020-10-10 10:32:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 11:21:12
 * @description:
 */
// 函数重载
// 解决不同参数类型运算
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    if (typeof x === 'object') {
        var pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log(pickedCard1);
var pickedCard2 = pickCard(15);
console.log(pickedCard2);
