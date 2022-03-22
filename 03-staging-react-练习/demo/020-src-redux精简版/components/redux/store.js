//该文件专门用来暴漏store对象,整个应用只有一个 store对象

//引入
import { createStore } from "redux";

//引入为redux服务的 reducer
import countReducer from "./count_reducer";

export default createStore(countReducer);
