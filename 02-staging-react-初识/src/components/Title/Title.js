import react,{Component} from "react"
import title from "./Title.module.css"

class Title extends Component{
    render(){
        return(
            <h1 className={title.Title}>Title组件</h1>
        )
    }
}
export default Title;