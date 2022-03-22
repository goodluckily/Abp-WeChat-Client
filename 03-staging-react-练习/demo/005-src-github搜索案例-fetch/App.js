
import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"
import PubSub from "pubsub-js"

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Search/>
        <List/>
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

