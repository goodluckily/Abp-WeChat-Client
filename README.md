## Abp-WeChat-Client

#### 路由组件与一般组件区别

#### 1. 写法不同

1. 一般组件 <Demo/>
2. 路由组件 <Route path='/demo' component={Demo}>

#### 2.存放位置不同

1. 一般组件 components
2. 路由组件 pages

##### 3.接受到的 props 不同

1. 一般组件 传递什么,接受到什么
2. 路由组件

```javascript
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)

    location:
        pathname: "/about"
        search: ""
        state: undefined

    match:
        params: {}
        path: "/about"
        url: "/about"
```

#### Link 与 NavLink 的区别

1. NavLink 可以实现路由链接的高亮.通过activeClassName指定样式名称
2. 标签体内容是一个特殊的标签 ==Children==
3. 通过 this.porps.children 可以得到标签体里面的内容

