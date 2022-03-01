import React, { Component } from 'react'
import axios from 'axios';
import "./index.css"

export default class Search extends Component {
  render() {
    return (
      <div>
        <section className="head">
          <h3>Search Github Users</h3>
          <div>
            <input ref={(c) => { this.keyword = c; }} type="text" placeholder='输入关键词进行搜索' />
            <button onClick={this.search}>Search</button>
          </div>
        </section>
      </div>
    )
  }

  search = () => {
    //1.获取用户的输入
    // const text = this.keyword.value;

    //连续结构赋值
    //1.连续从结构 赋值得到结果 value
    //2.再将 value 重命名为 text
    const {keyword:{value:text}} = this; 

    
    //2.发送网络请求
    axios.get(`https://api.github.com/search/users?q=${text}`).then(
      response=>{
        this.props.saveUsers(response.data.items);
      },
      error=>{
        console.log("error",error);
      }
    )
  }
}