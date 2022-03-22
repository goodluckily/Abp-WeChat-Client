import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import MessageDetail from "../../../components/MessageDetail";

export default class Message extends Component {
  state = {
    arrMesasage: [
      { id: "01", title: "消息1111" },
      { id: "02", title: "消息2222" },
      { id: "03", title: "消息3333" },
    ],
  };
  replaceShow = (item) => {
    //replace跳转-携params 参数
    // this.props.history.replace(`/home/message/detail/${item.id}/${item.title}`);

    //replace跳转-携search 参数
    // this.props.history.replace(`/home/message/detail/?id=${item.id}&title=${item.title}`);

    //replace跳转-携state 参数
    this.props.history.replace(`/home/message/detail`, { id: item.id, title: item.title });
  };
  pushShow = (item) => {
    //push跳转-携params参数
    // this.props.history.push(`/home/message/detail/${item.id}/${item.title}`);

    //push跳转-携search 参数
    // this.props.history.push(`/home/message/detail/?id=${item.id}&title=${item.title}`);

    //push跳转-携state 参数
    this.props.history.push(`/home/message/detail`, { id: item.id, title: item.title });
  };
  render() {
    const { arrMesasage } = this.state;
    return (
      <div>
        <ul>
          {arrMesasage.map((item) => {
            return (
              <li key={item.id}>
                {/* 001-向路由组件传递 params参数 */}
                <Link to={`/home/message/detail/${item.id}/${item.title}`} children={item.title} />
                &nbsp; <button onClick={() => this.pushShow(item)}>push查看</button>
                &nbsp; <button onClick={() => this.replaceShow(item)}>replace查看</button>
                {/* 002-向路由组件传递 search参数 */}
                {/* <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} children={item.title} /> */}
                {/* 003-向路由组件传递 state参数 */}
                {/* <Link to={{ pathname: "/home/message/detail", state: { id: item.id, title: item.title } }} children={item.title} /> */}
              </li>
            );
          })}
        </ul>
        <hr />
        <Switch>
          {/* 001-声明接受params参数 */}
          <Route path="/home/message/detail/:id/:title" component={MessageDetail} />

          {/* 002-search参数  无需接受,正常注册路由即可*/}
          {/* <Route path="/home/message/detail" component={MessageDetail} /> */}

          {/* 003-state参数  无需接受,正常注册路由即可*/}
          {/* <Route path="/home/message/detail" component={MessageDetail} /> */}
        </Switch>
        <hr />
        <button onClick={this.backFunc}>后退</button>
        <button onClick={this.goFunc}>前进</button>
      </div>
    );
  }

  backFunc = () => {
    this.props.history.goBack();
  };
  goFunc = () => {
    this.props.history.goForward();
  };
}
