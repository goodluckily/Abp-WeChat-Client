
import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"

export default class App extends Component {
  state = { //初始化状态
    users: [],
    isFirst:true,
    isLoading:false,
    isError:false,
    errorMsg:""
   };
  render() {
    return (
      <div>
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    )
  }

  //更新State
  updateAppState = (stateObj)=>{
    this.setState(stateObj);
  }

  //取得github用户
  // saveUsers = (users) => {
  //   this.setState({ users: users });
  // }
}

