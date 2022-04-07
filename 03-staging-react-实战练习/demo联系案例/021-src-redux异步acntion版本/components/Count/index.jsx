import React, { Component } from "react";
import { Button, Select } from "antd";
import store from "../../redux/store";
// import { Day } from "../../redux/count_action.ts";
const { Option } = Select;

export default class Count extends Component {
  state = { num: 1 };
  render() {
    // console.log(Day["SATURDAY"]);
    // console.log(Day[Day.SATURDAY]);
    return (
      <div>
        <h1>当前求和为:{store.getState()}</h1>
        <Select defaultValue={1} onChange={(c) => this.changeSelect(c)}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
          <Option value={3}>3</Option>
          <Option value={4}>4</Option>
        </Select>
        <Button onClick={this.jia}>+</Button>
        <Button onClick={this.Jian}>-</Button>
        <Button onClick={this.Cheng}>同减==0</Button>
      </div>
    );
  }
  changeSelect = (c) => {
    this.setState({ num: c });
  };
  jia = () => {
    const { num } = this.state;
    //通知redux加value
    store.dispatch({ type: "jia", data: num });
  };
  Jian = () => {
    const { num } = this.state;
    //通知redux减value
    store.dispatch({ type: "jian", data: num });
  };
  Cheng = () => {
    const chengVal = store.getState();
    //通知redux
    store.dispatch({ type: "jian", data: chengVal });
  };

  //方式一:组件自身写
  //   componentDidMount() {
  //     //检测(订阅)state里面的状态发生变化,只要变化就调用render();
  //     store.subscribe(() => {
  //       this.setState({});
  //     });
  //   }
}
