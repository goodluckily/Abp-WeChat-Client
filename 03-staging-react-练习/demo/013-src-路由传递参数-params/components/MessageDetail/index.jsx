import React, { Component } from "react";

export default class MessageDetail extends Component {
  render() {
    //001-接收路由传递的params参数
    const { params } = this.props.match;
    console.log(this.props);
    return (
      <div>
        <ul>
          <li>Id: {params.id}</li>
          <li>标题: {params.title}</li>
        </ul>
      </div>
    );
  }
}
