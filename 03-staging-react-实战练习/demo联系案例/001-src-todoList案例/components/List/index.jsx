import React, { Component } from 'react'
import {PropTypes} from "prop-types"
import Item from '../Item'

class List extends Component {
    //对参数限制
    static propTypes={
        todos:PropTypes.array.isRequired,
        changeTodo:PropTypes.func.isRequired,
        handDeleteTodo:PropTypes.func.isRequired,
    }
    render() {
        //传递参数 传递Item函数
        const {todos,changeTodo,handDeleteTodo} = this.props;
        console.log("List",todos);
        return (
            <div>
                <ul>
                    {
                        todos.map(todo=>{
                            return <Item key={todo.id} todo ={todo} changeTodo={changeTodo} handDeleteTodo={handDeleteTodo} />
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default List
