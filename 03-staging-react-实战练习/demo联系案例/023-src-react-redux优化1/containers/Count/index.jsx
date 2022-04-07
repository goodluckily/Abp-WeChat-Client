//引入Count的UI组件
import CountUI from "../../components/Count";

//容器组件 是由react-redux提供的 连接UI和store
import { connect } from "react-redux";

//a函数的返回对象 作为状态传递给 UI组件
const mapStateToProps = (state, ownProps) => ({ count: state });

//专门用来传递 操作store的方法
const mapDispatchToProps = (dispatch, ownProps) => ({
  //加
  jia: (num) => {
    dispatch({ type: "jia", data: num });
  },
  //减
  jian: (num) => {
    dispatch({ type: "jian", data: num });
  },
  //异步加
  jiaAsync: (num, time) => {
    setTimeout(() => {
      dispatch({ type: "jia", data: num });
    }, time);
  },
});

const container = connect(mapStateToProps, mapDispatchToProps)(CountUI);

//创建并暴露一个Count的容器组件
export default container;
