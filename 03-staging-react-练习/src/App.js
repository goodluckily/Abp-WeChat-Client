
import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List"

export default class App extends Component {
  state = { users: [] };
  render() {
    return (
      <div>
        <Search saveUsers={this.saveUsers} />
        <List users={this.state.users} />
      </div>
    )
  }

  //保存github用户
  saveUsers = (users) => {
    this.setState({ users: users });
  }
}

