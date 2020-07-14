# How to debugger Vue
下载官方源码，在package.json dev启动命令加上--sourcemap
```
"dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev --sourcemap"
```