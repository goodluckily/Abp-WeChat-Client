import React, { Component } from "react"

import Footer from './components/Footer';
import Header from "./components/Header"
import List from './components/List';

class App extends Component {

  //状态在哪里 操作状态的方法就在哪里

  //初始化状态
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打游戏", done: false },
      { id: 4, name: "打篮球", done: false },
    ]
  }

  // addTodo=(todoObj)=>{
  //   console.log("App",todoObj);
  //   const {todos} = this.state;
  //   debugger
  //   var thisTodoList = [...todos,todoObj];
  //   this.setState({todos:thisTodoList});
  // }

  //添加todo
  addTodo = (name) => {
    console.log("App", name);
    const { todos } = this.state;
    const thisTodo = { id: todos.length + 1, name: name, done: false };
    var thisTodoList = [...todos, thisTodo];
    this.setState({ todos: thisTodoList });
  }

  //更改todo
  changeTodo = (id, flag) => {
    const { todos } = this.state;
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: flag };
      return todo;
    });
    this.setState({ todos: updateTodos });
  }

  //删除Todo
  handDeleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    })
    this.setState({ todos: newTodos });
  }

  //清除已经完成Todo
  clearDoneTodo=()=>{
    const { todos } = this.state;
    const newTodos = todos.filter(todo => {
      return !todo.done;
    })
    this.setState({ todos: newTodos });
  }

  //全选
  changeAllTodo=(flag)=>{
    const { todos } = this.state;
    let newTodos = todos.map(todo => {
      return {...todo,done:flag};
    });
    this.setState({ todos: newTodos });
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} changeTodo={this.changeTodo} handDeleteTodo={this.handDeleteTodo} />
        <Footer todos={todos} clearDoneTodo={this.clearDoneTodo} changeAllTodo={this.changeAllTodo}/>
      </div>
    );
  }
}


export default App;
