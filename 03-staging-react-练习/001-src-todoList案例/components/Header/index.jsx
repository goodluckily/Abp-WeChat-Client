import React,{Component} from "react"
import {nanoid} from "nanoid"
import {PropTypes} from "prop-types"

class Header extends Component{

    //对参数类型限制
    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    render(){
        return(
            <div>
                <input onKeyUp={this.inputKeyUp} style={{width:"250px",height:"24px"}} type="text" placeholder="请输入你的任务名称,按回车键确认" />
            </div>
        )
    }

    inputKeyUp=(event)=>{
        const {keyCode,target} = event;
        if(keyCode!==13)return;
        console.log(target.value,event.keyCode)
        //字组件改变父组件 需要接函数 在调用父级函数传递参数
        this.props.addTodo(target.value);

        //第三方的不重复的唯一id
        // const thisTodo = {id: nanoid(), name: target.value, done: true};
        // this.props.addTodo(thisTodo);


        target.value="";
    }
}

export default Header;