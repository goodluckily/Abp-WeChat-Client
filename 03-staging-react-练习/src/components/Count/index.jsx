import React, { Component } from "react";
import { Button, Select } from "antd";
const { Option } = Select;

export default class Count extends Component {
  state = { num: 0 };
  render() {
    return (
      <div>
        <h1>当前求和为:{this.state.num}</h1>
        <Select name="" ref={(c) => (this.selectNumber = c)}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select>
        <Button onClick={this.Jia}>+</Button>
        <Button onClick={this.Jian}>-</Button>
        <Button onClick={this.Cheng}>*</Button>
        <Button onClick={this.Chu}>/</Button>
      </div>
    );
  }
}
