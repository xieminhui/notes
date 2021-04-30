### react15架构
  React15架构分为两层：
  + Reconciler(协调器) --- 负责找出变化的组件
  + Renderer(渲染器) --- 负责将变化的组件渲染到页面上

#### Reconciler
在react中，可以通过`this.setSate`, `this.forceUpdate`,`ReactDom.render`等API来触发更新。

每当有更新发生时，Reconciler会做如下工作：
+ 调用函数组件、class组件的`render·方法，将返回的JSX转为虚拟DOM
+ 将虚拟DOM和上次更新时的虚拟DOM对比
+ 通过对比找出本次更新中变化的虚拟DOM
+ 通知Renderer将变化的虚拟DOM渲染到页面上

#### Renderer
React是跨平台的，不用的不用有不同的renderer。浏览器的renderer就是ReactDom。
+ ReactNative渲染器，渲染App原生组件
+ ReactTest渲染器，渲染纯js对象用于测试
+ ReactArt渲染器，渲染到Canvas,SVG,VML

在每次更新发生时，Renderer接到Reconciler通知，将变化的组件渲染到当前环境中。

#### React15缺点
+ 递归更新变化的组件，这点跟Vue一样，生成虚拟DOM后，递归对比渲染。所以缺点也很明显，一旦开始就无法中断。当组件比较复杂时，递归更新的时间就会长，容易超过16ms，变成阻塞浏览器渲染的长任务。
+ ，Reconciler和Renderer是交替工作的，所以可能会出现渲染时Reconciler出现中断，导致渲染没有同步完成，用户察觉出视觉变化。
  ```
  <li>1</li> ->  <li>1</li> -> Reconciler发现1->2,通知Renderer,更新dom
  <li>2</li> ->  <li>4</li> -> Reconciler发现2->4,通知Renderer,更新dom
  <li>3</li> ->  <li>6</li> -> Reconciler发现3->6,通知Renderer,更新dom

  ```

  ### React16架构
  React16架构分三层：
  + Schedule（调度器） --- 调度任务的优先级
  + Reconciler（协调器）--- 负责找出变化的组件
  + Renderer（渲染器）--- 负责将变化的组件渲染到页面上

对比React15，新增了Schedule

#### Schedule（调度器）
用于判断浏览器是否还有剩余时间，其实就是将任务进行时间分片，将渲染任务分割到浏览器每次渲染的空闲间隙中。

浏览器自带一个API`requestIdleCallback`，它能告诉你浏览器的空闲时间，但是基于兼容性和稳定性，React决定自己实现。

除了在空闲时触发回调外，还有处理不同优先级的任务调度。

#### Reconciler(协调器)
在React15中，Reconciler是递归处理虚拟DOM的。在React16中，更新工作虫递归变成了课中断的递归过程，每次循环会调用`showldYideld`来判断是否有剩余时间，这个是api其实就是判断代码代码的执行时间是否超过了代码设置的时间，不同的优先级会给不同的执行时间。
```
function workLoopConcurrent() {
  // Perform work until Scheduler asks us to yield
  while (workInProgress !== null && !shouldYield()) {
    workInProgress = performUnitOfWork(workInProgress);
  }
}
```

那如何解决React15中渲染不完全的问题呢？

在React16中，Reconciler与Renderer不再是交替工作。当Schedule将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上增/删/更新的标记：
```
export const Placement = /*             */ 0b0000000000010;
export const Update = /*                */ 0b0000000000100;
export const PlacementAndUpdate = /*    */ 0b0000000000110;
export const Deletion = /*              */ 0b0000000001000;
```

整个Schedule与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。

#### Renderer（渲染器）
Renderer根据Reconciler为虚拟DOM打的标记，同步执行对应的DOM操作。
![process.png](./process.png)

其中红色框的步骤可能由于以下原因被中断：
+ 有其他更高优先级的任务
+ 当前帧没有剩余时间