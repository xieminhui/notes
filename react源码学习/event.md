### react事件机制
react采用事件委托来处理事件，将事件委托在root节点上，通过事件冒泡来区分不同的dom，进而合成事件，然后处理对应dom的绑定事件

#### 事件触发的dom如何跟fiber节点对应上
react在每个dom上面增加了一个自定义属性，如__reactFiber$7xclih0i9ak，这个是回变的，随机数生成第一个字符串，这个属性记录对应fiber节点的值