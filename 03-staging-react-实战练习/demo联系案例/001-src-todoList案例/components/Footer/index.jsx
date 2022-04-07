import React, { Component } from "react"

class Footer extends Component {
    render() {

        const { todos } = this.props;
        const todoNum = todos.length;

        //得到已经完成的
        //方式一
        // const okCheckNum = todos.filter((item, index, arry) => {
        //     return item.done === true;
        // });

        //方式二
        const okCheckNum = todos.reduce((pre, current) => {
            return pre + (current.done ? 1 : 0);
        }, 0);//0表示统计时的初始值

        return (
            <div>
                <label>
                    <input type="checkbox" checked={this.ischackedBool(todoNum, okCheckNum)} onChange={this.handChangeAll} />
                </label>
                <span>
                    <span>已经完成{okCheckNum}</span> / 全部{todoNum}
                </span>
                <button onClick={() => this.handClearTodo()}>清除已完成任务</button>
            </div>
        )
    }

    //全选 取消全选
    handChangeAll = (event) => {
        this.props.changeAllTodo(event.target.checked);
    }

    //调用父传递方法 清除
    handClearTodo = () => {
        this.props.clearDoneTodo();
    }

    //判断全选是否选中
    ischackedBool = (todoNum, okCheckNum) => {
        if (todoNum === 0 || todoNum !== okCheckNum) return false;
            else return true;
    }
}

export default Footer;