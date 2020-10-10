/*
 * @Date: 2020-10-10 14:48:50
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-10 15:41:48
 * @description:
 */
function loggingIdentity(arg) {
    console.log(arg);
    return arg;
}
loggingIdentity('aa');
function identity(arg) {
    return arg;
}
var myIdentity = identity;
var myIdentity1 = identity;
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
