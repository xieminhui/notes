/*
 * @Date: 2020-07-01 10:56:28
 * @LastEditors: xieminhui
 * @LastEditTime: 2020-07-01 11:19:36
 * @description: 
 */


// 发布订阅模式

// 调度者，负责调度不同的主题发布，可有可不有，有不同发布主题可以选择使用
class publisher {
  constructor() {
    this.pubs = new Map();
  };
  addPubs (topic, pub) {
    this.pubs.set(topic, pub);
    return this;
  }
  publishTopic (topic, data) {
    let pub = this.pubs.get(topic);
    pub.publish(data);
  }
}


// 发布者
class pub {
  constructor(topic) {
    this.topic = this.topic;
    this.subscribes = [];
  }
  addSub (subscriber) {
    this.subscribes.push(subscriber);
    return this;
  }
  publish (data) {
    this.subscribes.forEach(ele => {
      ele.update(data);
    })
  }
}

// 订阅者

class subscriber {
  constructor(fn) {
    this.callback = fn;
  }
  update (data) {
    this.callback(data);
  }
}

let sub1 = new subscriber(function (data) {
  console.log('sub1', data);
})

let sub2 = new subscriber(function (data) {
  console.log('sub2', data);
})

let pub1 = new pub('topic1');
pub1.addSub(sub1).addSub(sub2);
// pub1.publish('topic1 data');

let pub2 = new pub('topic2');
pub2.addSub(sub1).addSub(sub2);
// pub2.publish('topic2 data');

let publisher1 = new publisher();
publisher1.addPubs('topic1', pub1).addPubs('topic2', pub2);
publisher1.publishTopic('topic1', 'topic1 data');
publisher1.publishTopic('topic2', 'topic2 data');