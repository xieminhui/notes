/*
 * @Date: 2020-10-13 14:47:54
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-13 14:51:27
 * @description:
 */ function getCacheData(key) {
    return window.cache[key];
}
var tom = getCacheData('tom');
tom.run();
