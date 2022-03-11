//1.文件是用来创建Count组件服务的一个reducer,reducer本质是一个函数
//2.reducer函数会接到两个参数,分别为:之前状态(preState),动作对象
const initNum = 0;
export default function countReducer(preState = initNum, action) {
  //从action对象里面获取type,data
  const { type, data } = action;
  //依据type加工数据
  switch (type) {
    case "jia":
      return preState + data;
    case "jian":
      return preState - data;
    default:
      return preState;
  }
}
