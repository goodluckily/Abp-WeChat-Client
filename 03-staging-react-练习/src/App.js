import React, { Component } from "react";
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect } from "react-router-dom";
import { WechatOutlined } from "@ant-design/icons";
import Count from "./components/Count";

import "./App.less";

export default class App extends Component {
  render() {
    return (
      <div>
        <Count>yarn</Count>
      </div>
    );
  }
}
