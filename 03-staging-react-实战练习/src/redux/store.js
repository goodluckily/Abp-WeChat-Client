//该文件专门用来暴漏store对象,整个应用只有一个 store对象

//引入 store,和中间件
import { createStore, applyMiddleware } from "redux";

//引入为redux服务的 reducer
import countReducer from "./count_reducer";

//映入redux-thunk,用于支持异步Action
import thunk from "redux-thunk";

export default createStore(countReducer, applyMiddleware(thunk));
