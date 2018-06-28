### 1.让低版本浏览器支持html5标签,不识别，也不能应用css
让 CSS 样式应用在未知元素上只需执行 document.createElement(elementName) 
即可实现，这个方法可以加入自定义的标签。HTML5Shiv 就是根据这个原理创建的。