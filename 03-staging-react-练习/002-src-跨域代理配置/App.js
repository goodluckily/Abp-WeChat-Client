
import React, { Component } from 'react'
import axios from "axios"

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <button onClick={this.getStudentData}>点击开始请求</button>
      </div>
    )
  }

  //
  getStudentData = ()=>{
    axios.get("http://192.168.6.124:3000/api1/getStudentList").then(
      response=>{console.log("成功:",response)},
      error =>{console.log("失败:",error)}
    )
  }
}

