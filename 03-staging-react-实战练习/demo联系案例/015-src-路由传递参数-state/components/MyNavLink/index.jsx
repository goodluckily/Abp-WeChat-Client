import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MyNavLink extends Component {
  render() {
    // const { title } = this.props;
    return (
      //   <NavLink
      //     activeClassName="testactive"
      //     className="list-group-item"
      //     {...this.props}
      //   >
      //     {this.props.children}
      //   </NavLink>

      //children 在属性里面 也是一样起效果的
      <NavLink activeClassName="testactive" className="list-group-item" {...this.props} />
    );
  }
}
export default MyNavLink;
