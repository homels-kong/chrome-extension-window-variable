### 一个简单的chrome插件，可以获取加载页面window上指定属性的值

------

### 该插件有什么功能？

> * 轻松查看window上指定变量的值，不需要打开控制面板console.log


### 如何接入
很简单，只要在页面模版中按照格式埋点，把对象赋值给`window.preciousValue`即可
```javascript
window.preciousValue = {
    userInfo: {}
}
```


