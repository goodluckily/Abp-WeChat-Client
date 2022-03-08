import React, { Component } from "react";
import qs from "querystring";
export default class MessageDetail extends Component {
  render() {
    //001-接收路由传递的 params参数
    // const { params } = this.props.match;
    //002-接收路由传递的 search参数

    //002-
    //对象转字符串(互转)
    // let obj = { a: 1, b: 2 };
    // console.log(qs.stringify(obj));
    // console.log(qs.parse("q=search+string&version=1&person=Eric"));
    const data = this.props.location.search;
    const param = data.split("?")[1];
    const search = qs.parse(param);
    console.log(search);
    return (
      <div>
        <ul>
          {/* <li>Id: {params.id}</li>
          <li>标题: {params.title}</li> */}

          <li>Id: {search.id}</li>
          <li>标题: {search.title}</li>
        </ul>
      </div>
    );
  }
}
