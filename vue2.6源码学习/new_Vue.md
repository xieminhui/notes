# Vue的mixin
+ 这个是vue的初始化，主要是给vue加上相关API。代码位置`src/core/instance/index.js`
 ```
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)
```

# new Vue发生了什么
  1、执行上面的`this._init(options)`

  2、init在`src/core/instance/init.js`
```
    ...
      //合并options
      // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    ...
    
    // 初始化生命周期
    initLifecycle(vm)
    // 初始化事件（自定义的事件）
    initEvents(vm)
    // 初始化渲染，这里挂载了一个重要的api,$createElement，这个是用来生成vnode
    initRender(vm)
    // beforeCreate hook
    callHook(vm, 'beforeCreate')
    initInjections(vm) // resolve injections before data/props
    // observer data,数据劫持
    initState(vm)
    initProvide(vm) // resolve provide after data/props
    callHook(vm, 'created')
```
  3、下一步依然实在init.js里面
```
// 开始生成vnode
if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }

```
4、进入$mounted跟踪，代码在`src\platforms\web\entry-runtime-with-compiler.js`
```
  ...
  // 拿到传入的html字符串
  template = getOuterHTML(el)
  ...
  // 将template解析成ast，在生成render函数
   const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)

```
5、进入`compileToFunctions`跟踪，代码在`src\complier\to-function.js`
```
  // compile,生成ast语法树
    const compiled = compile(template, options)
```
6、进入`compile`跟踪，代码在`src\complier\create-compiler.js`
```
// 开始编译生成语法树
 const compiled = baseCompile(template.trim(), finalOptions)
```
7、跟踪baseCompile，代码在`/src/compiler/index.js`
```
  //生成语法树，怎么生成，后面再具体分析
  const ast = parse(template.trim(), options)
  if (options.optimize !== false) {
    optimize(ast, options)
  }
  const code = generate(ast, options)
  return {
    ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }

  //+++++++++++++++++输出一下code,看结构+++++++++++++++////
  {
  "render": "with(this){return _c('div',{attrs:{\"id\":\"app\"}},[_c('p',{attrs:{\"id\":\"msg\"}},[_v(_s(msg))]),_v(\" \"),_c('p',{class:{p1: usep1}},[_v(_s(msg))]),_v(\" \"),(show)?_c('p',[_v(_s(msg))]):_e(),_v(\" \"),(!show)?_c('p',[_v(_s(msg))]):_e(),_v(\" \"),_c('ul',_l((ul),function(item,index){return _c('li',{key:item.key},[_v(_s(item.txt)+\"#\"+_s(item.key))])}),0),_v(\" \"),_c('button',{on:{\"click\":changeTxt}},[_v(\"改变文字\")]),_v(\" \"),_c('button',{on:{\"click\":changeTxt1}},[_v(\"改变ul \")]),_v(\" \"),_c('button',{on:{\"click\":changeTxt2}},[_v(\"insert li \")]),_v(\" \"),_c('button',{on:{\"click\":changeClass}},[_v(\"change class\")]),_v(\" \"),_c('button-counter')],1)}",
  "staticRenderFns": []
  }
```
8、执行完7，退回到步骤6，5，4，
```
  const { render, staticRenderFns } = compileToFunctions(template, {
        outputSourceRange: process.env.NODE_ENV !== 'production',
        shouldDecodeNewlines,
        shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this)

   // 这时候的render就是一个生成vnode的 render函数了

   // 输出看下
   with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',{attrs:{"id":"msg"}},[_v(_s(msg))]),_v(" "),_c('p',{class:{p1: usep1}},[_v(_s(msg))]),_v(" "),(show)?_c('p',[_v(_s(msg))]):_e(),…

  // 开始渲染
   return mount.call(this, el, hydrating);
   
```
9、下一步,代码在`src/platforms/web/runtime/index.js`
```
return mountComponent(this, el, hydrating)
```
10、下一步`src/core/instance/lifecycle.js`，这里执行两步比较重要的，第一步生成一个watcher,它的作用就是每次vm中的data变化时，执行dom的更新。watcher执行完回调updateComponent，它回生成vnode。
```
...
 updateComponent = () => {
      // 生成vnode
      vm._update(vm._render(), hydrating)
}
...
  new Watcher(vm, updateComponent, noop, {
    before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate')
      }
    }
  }, true /* isRenderWatcher */)
  hydrating = false
```
11、new Watcher详细先不讲，这里先看下生成vnode做了什么，`vm._update(vm._render(), hydrating)`，代码在`src/core/instance/render.js`
```

//=====================render start
with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',{attrs:{"id":"msg"}},[_v(_s(msg))]),_v(" "),_c('p',{class:{p1: usep1}},[_v(_s(msg))]),_v(" "),(show)?_c('p',[_v(_s(msg))]):_e(),…
///====================render end

// 生成vnode,上面说个这个render是由template编译出的render函数，这里回执行这个函数，从而生成vnode
// 这里包括完成依赖的收集，通过在with读取变量，触发observer，在get中收集对应的watcher
// vnode生成中还包括事件绑定，直接addeventlister()。
 vnode = render.call(vm._renderProxy, vm.$createElement);

```
12、完成。