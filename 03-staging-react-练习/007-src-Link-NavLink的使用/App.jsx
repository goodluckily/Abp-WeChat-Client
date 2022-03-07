import React, { Component } from "react";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import About from "./pages/About"; //路由组件
import Home from "./pages/Home"; //路由组件
import Header from "./components/Header"; //一般组件

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              {/* 一般组件 */}
              <Header />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 原生的跳转 */}
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
            </div>

            {/* 在React中依靠路由链接切换组件 编写路由链接  切换无高亮*/}
            {/* <div className="list-group">
              <Link className="list-group-item" to="/about">About</Link>
              <Link className="list-group-item" to="/home">Home</Link>
            </div> */}

            {/* 切换有高亮 activeClassName 追加选中时的名class名称 默认active*/}
            <div className="list-group">
              <NavLink
                activeClassName="testactive"
                className="list-group-item"
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="testactive"
                className="list-group-item"
                to="/home"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
