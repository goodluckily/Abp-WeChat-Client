import React, { Component } from "react"
import "./index.css"

class List extends Component {
    render() {
        const { users } = this.props;
        return (
            <div className="list">
                {
                    users.map((user) => {
                        // id
                        // avatar_url
                        // login
                        // html_url
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