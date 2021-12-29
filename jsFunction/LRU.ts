/*
 * @Author: your name
 * @Date: 2021-12-29 12:09:08
 * @LastEditTime: 2021-12-29 12:22:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \notes\jsFunction\LRU.ts
 */


class LRUCache {
    maxCapacity = 0;
    count = 0;
    map = null;

    constructor(capacity: number) {
        this.maxCapacity = capacity;
        this.map = new Map();
    }

    get(key: number): number {
        const value  =  this.map.get(key) || -1;
        if(this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
        }
        return value;
    }

    put(key: number, value: number): void {
        if(this.map.has(key)) {
            this.map.delete(key);
            this.map.set(key, value);
            return;
        }

        if(this.count === this.maxCapacity ) {
            const dkey = this.map.keys().next().value;
            this.map.delete(dkey);
            this.count--;
        } 
        this.count++;
        this.map.set(key, value);
    }
}


// ["LRUCache","get","put","get","put","put","get","get"]
// [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]

const lru = new LRUCache(2);

lru.get(2);
lru.put(2, 6);
lru.get(1);
lru.put(1, 5);
lru.put(1, 2);
lru.get(1);
lru.get(2);