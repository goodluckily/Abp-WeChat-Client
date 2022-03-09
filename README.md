## Abp-WeChat-Client

#### 1.路由组件与一般组件区别

##### 写法不同

1. 一般组件`<Demo/>`
2. 路由组件`<Route path='/demo' component={Demo}>`

##### 存放位置不同

1. 一般组件 components
2. 路由组件 pages

##### 接受到的 props 不同

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

#### 2.Link 与 NavLink 的区别

1. NavLink 可以实现路由链接的高亮.通过 activeClassName 指定样式名称
2. 标签体内容是一个特殊的标签 ==Children==
3. 通过 this.porps.children 可以得到标签体里面的内容

#### 3.解决多级页面刷新样式丢失的问题

1. public/index.html 中 引用样式时不写 ./ 写 ==/常用==
2. public/index.html 中 引用样式时不写 ./ 写 ==%PUBLIC_URL%/==
3. 使用 HashRouter

#### 4.路由的严格匹配与模糊匹配

1. 默认的是模糊匹配, [输入路径]-->[匹配路径 /.....等等] 且是==左匹配原则==
2. 开始严格匹配模式 ==exact== 属性` <Route path="/about" component={About} exact/>`
3. 严格模式不要随便开启,有时候容易导致无法继续匹配二级路由

#### 5.Redirect 的使用

1. 用来兜底 相当于 default 一般都是用来 匹配默认的 / path 地址

   ```C#
   <Redirect to="/about" component={About} />
   ```

#### 6.嵌套路由的使用

1. 注册子路由时需要带上父路由的 path 值
2. 路由的匹配是按照路由注册的顺序执行的

   ```C#
   <NavLink className="list-group-item" to="/home/news" children="News"></NavLink>
   
   <Switch>
       <Route path="/home/news" component={News} />
       <Route path="/home/message" component={Message} />
       <Redirect to="/home/news" />
   </Switch>
   ```

#### 7.路由向组件传递参数

1. params 传递参数

   ```C#
   //传递
   <Link to={`/home/message/detail/${item.id}/${item.title}`} children={item.title} />
   //注册
   <Route path="/home/message/detail/:id/:title" component={MessageDetail} />
   //获取传递的params参数
   const { params } = this.props.match;
   ```

2. Search 传递参数

   ```C#
   //传递有点像query传递
    <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} children={item.title} />
   //注册 无需接受,正常注册路由即可
   <Route path="/home/message/detail" component={MessageDetail} />
   //接受比较麻烦,需要把 ?aa=11&bb=22 改为对象
   const data = this.props.location.search;
   const param = data.slice(1);
   const search = qs.parse(param);//qs是包解析 import qs from "querystring";
   ```

3. state 参数(注意是路由组件里面的)

   ```C#
   //传递
   <Link to={{ pathname: "/home/message/detail", state: { id: item.id, title: item.title } }} children={item.title} />
   //接受
   <Route path="/home/message/detail" component={MessageDetail} />
   //获取值
   const { state } = this.props.location;
   //刷新也能保留参数
   ```

#### 4.自定义控制路由导航

1. 借助 this.props.history 对象进行操作
2. withRouter可以将一般组件 也可以使用路由组件里面的方法



#### 5.BrowserRouter与HasRouter的区别

1. 底层原理不一样
   - BrowserRouter使用的是H5的history api,不兼容IE9已下版本
   - HasRouter 使用的是Url里面的哈希值
2. path表现形式不一样
   - BrowserRouter 的路径中没有# ,例如localhost:3000/a/b
   - HasRouter 的路径包含# ,;例如 localhost:3000/#/a/b
3. 刷新后对路由state参数的影响
   - BrowserRouter  没有任何影响,因为state保存在history对象中
   - HasRouter  会导致state参数的丢失
4. HasRouter   可以用来解决一些路径错误相关的一些问题

