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
    const { keyword: { value: text } } = this;
    //发送请求前更新状态
    this.props.updateAppState({isFirst:false,isLoading:true});
    //2.发送网络请求
    axios.get(`https://api.github.com/search/users?q=${text}`).then(
      response => {
        //请求成功后更新状态
        this.props.updateAppState({isLoading:false,users:response.data.items});
      },
      error => {
        //请求失败后更新状态

        //这里errorMsg 不能存错误对象,只能是错误对象上的属性
        this.props.updateAppState({isLoading:false,isError:true,errorMsg:error.message});
      }
    )
  }
}