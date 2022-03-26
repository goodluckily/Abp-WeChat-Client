import React, { Component } from "react";
import { Button, Select } from "antd";
import store from "../../redux/store";
import { createJiaAysnc } from "../../redux/count_action.ts";
const { Option } = Select;

export default class Count extends Component {
  state = { num: 1 };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
        <Select defaultValue={1} onChange={(c) => this.changeSelect(c)}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
        </Select>
        <Button onClick={this.jia}>+</Button>
        <Button onClick={this.Jian}>-</Button>
        <Button onClick={this.Cheng}>同减==0</Button>
        <Button onClick={this.jiaAsync}>异步加</Button>
      </div>
    );
  }
  changeSelect = (c) => {
    this.setState({ num: c });
  };
  jia = () => {
    const { num } = this.state;
    //加
    this.props.jia(num);
  };
  Jian = () => {
    const { num } = this.state;
    //减
    this.props.jian(num);
  };
  Cheng = () => {
    const { num } = this.state;
  };
  jiaAsync = () => {
    const { num } = this.state;
    this.props.jiaAsync(num, 2000);
  };
}
