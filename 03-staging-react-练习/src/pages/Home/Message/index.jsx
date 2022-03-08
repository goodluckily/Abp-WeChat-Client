import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import MessageDetail from "../../../components/MessageDetail";

export default class Message extends Component {
  state = {
    arrMesasage: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
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
                {/* <Link to={`/home/message/detail/${item.id}/${item.title}`} children={item.title} /> */}

                {/* 002-向路由组件传递 search参数 */}
                <Link to={`/home/message/detail/?id=${item.id}&title=${item.title}`} children={item.title} />
              </li>
            );
          })}
        </ul>
        <hr />
        <Switch>
          {/* 001-声明接受params参数 */}
          {/* <Route path="/home/message/detail/:id/:title" component={MessageDetail} /> */}

          {/* 002-search参数  无需接受,正常注册路由即可*/}
          <Route path="/home/message/detail" component={MessageDetail} />
        </Switch>
      </div>
    );
  }
}
