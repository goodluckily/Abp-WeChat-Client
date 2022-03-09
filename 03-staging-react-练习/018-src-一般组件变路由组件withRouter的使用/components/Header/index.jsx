import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
  backFunc = () => {
    this.props.history.goBack();
  };
  goFunc = () => {
    this.props.history.goForward();
  };
  render() {
    // console.log("Header组件收到的是:", this.props);
    return (
      <div>
        <h2>React Router Demo1</h2>
        <button onClick={this.backFunc}>后退</button>
        <button onClick={this.goFunc}>前进</button>
      </div>
    );
  }
}

//可以将一般组件 也可以使用路由组件里面的方法  withRouter()
export default withRouter(Header);
