/*
 * @Date: 2020-10-13 14:47:54
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-13 14:51:27
 * @description: 
 */function getCacheData<T>(key: string): T {
  return (window as any).cache[key];
}

interface Cat {
  name: string;
  run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();