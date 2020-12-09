/*
 * @Date: 2020-10-09 16:55:26
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-10-15 15:50:18
 * @description: 
 */

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "red", width: 100 });



// 一个类只能继承另一个类，但可以继承多个接口

interface Alarm {
  alert(): void;
}

class Door { }

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('securityDoor alert');
  }
}

class Car implements Alarm {
  alert() {
    console.log('car alert');
  }
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Car1 implements Alarm, Light {
  alert() {
    console.log('car alert');
  }
  lightOn() {
    console.log('car light on');
  }
  lightOff() {
    console.log('car light off');
  }
}

// 接口可以继承类

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };