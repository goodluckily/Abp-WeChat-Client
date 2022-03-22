import React, { Component } from "react"
import PubSub from "pubsub-js"
import "./index.css"

class List extends Component {
    state = { //初始化状态
        users: [],
        isFirst: true,
        isLoading: false,
        isError: false,
        errorMsg: ""
    };

    render() {
        const { users, isFirst, isLoading, isError, errorMsg } = this.state;
        console.log(this.props);
        return (
            isFirst ? <h1>欢迎开始使用,请输入内容开始搜索!</h1> :
                isLoading ? <h1>Loading...</h1> :
                    isError ? <h1 style={{ backgroundColor: "red" }}>{errorMsg}</h1> :
                        <div className="list">
                            {
                                users.map((user) => {
                                    return (
                                        <div key={user.id}>
                                            <a href={user.html_url} target="_blank" rel="noreferrer">
                                                <img style={{ width: '100px', height: "100" }} src={user.avatar_url} alt={user.login} />
                                            </a>
                                            <p>{user.login}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
        )
    }

    //组件挂载完毕的钩子
    componentDidMount() {
        //订阅
        this.testToken = PubSub.subscribe("test", (msg, dataObj) => {
            this.setState(dataObj);
        });
    }

    //组件将要卸载时的钩子
    componentWillUnmount(){
        PubSub.unsubscribe(this.testToken);
    }

}
export default List;


// Promise  需要掌握