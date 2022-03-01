import React,{Component} from "react"
import {PropTypes} from "prop-types"
import "./index.css"

class Item extends Component{
    state = {isMouse:false}

    // //对参数类型限制
    // static propTypes = {
    //     changeTodo:PropTypes.func.isRequired,
    //     todo:PropTypes.isRequired,
    // }
    
    //鼠标移入 移出方法
    handerMouse=(flag)=>{
        return ()=>{
            this.setState({isMouse:flag})
        }
    }

    //勾选状态方法
    handCkeck=(id)=>{
        return (event)=>{
            console.log(id,event.target.checked);

            //更改App组件定义状态里面的函数方法
            this.props.changeTodo(id,event.target.checked);
        }
    }

    //删除方法 调用父级函数方法
    handDeleteTodo=(id)=>{
        if(window.confirm("确定删除吗?")){
            this.props.handDeleteTodo(id);
        }
    }

    render(){
        //传递参数
        const {todo} = this.props;
        const {isMouse} = this.state;
        return(
            <li className={isMouse?"li":""} onMouseEnter={this.handerMouse(true)} onMouseLeave={this.handerMouse(false)}>
               <label>
                    <input checked={todo.done} type="checkbox" onChange={this.handCkeck(todo.id)}/>
                    <span>{todo.name}</span>
               </label>
               <button style={{display:isMouse?"block":"none"}} onClick={()=>this.handDeleteTodo(todo.id)}>删除</button>
            </li>
        )
    }
}

export default Item;