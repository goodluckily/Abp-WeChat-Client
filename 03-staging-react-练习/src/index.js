import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./components/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//方式二,全局检测
//检测redux 的状态变化,整个全部重新渲染,因为有diff算法 所以不会影响很大
store.subscribe(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
