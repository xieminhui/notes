/*
 * @Date: 2020-10-10 15:47:42
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 15:52:09
 * @description:
 */
var Directoin;
(function (Directoin) {
    Directoin[Directoin["Up"] = 1] = "Up";
    Directoin[Directoin["Down"] = 2] = "Down";
    Directoin[Directoin["Left"] = 3] = "Left";
    Directoin[Directoin["Right"] = 4] = "Right";
})(Directoin || (Directoin = {}));
console.log(Directoin);
