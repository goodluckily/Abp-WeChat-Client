import React, { Component } from "react"
import "./index.css"

class List extends Component {
    render() {
        const { users, isFirst, isLoading, isError, errorMsg } = this.props;
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
}
export default List;