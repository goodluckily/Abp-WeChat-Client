import React, { Component } from "react";
import qs from "querystring";
export default class MessageDetail extends Component {
  render() {
    //001-接收路由传递的 params参数
    // const { params } = this.props.match;
    //002-接收路由传递的 search参数

    //002-接受search参数
    //对象转字符串(互转)
    // let obj = { a: 1, b: 2 };
    // console.log(qs.stringify(obj));
    // console.log(qs.parse("q=search+string&version=1&person=Eric"));
    // const data = this.props.location.search;
    // // const param = data.split("?")[1];
    // const param = data.slice(1);
    // const search = qs.parse(param);
    // console.log(search);


    //003-接受state参数
    var {state} = this.props.location.state;
    return (
      <div>
        <ul>
          {/* <li>Id: {params.id}</li>
          <li>标题: {params.title}</li> */}
          <li>Id: {state.id}</li>
          <li>标题: {state.title}</li>
        </ul>
      </div>
    );
  }
}
