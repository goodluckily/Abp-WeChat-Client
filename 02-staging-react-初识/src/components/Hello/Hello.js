import {Component} from "react"
import hello from "./Hello.module.css"

export default class Hellow extends Component{
    render(){
        return(
            <h1 className={hello.Title}>Hello,组件</h1>
        )
    }
}