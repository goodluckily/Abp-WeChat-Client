// let b = 2;
// let c = 3;

// enum Day {
//     SUNDAY,
//     MONDAY,
//     TUESDAY,
//     WEDNESDAY,
//     THURSDAY,
//     FRIDAY,
//     SATURDAY
// }
// export { b, c, Day};

// import store  from "./store"
import countReducer from "./count_reducer"

export const createJiaAysnc = (data,time)=>{
    return (dispatch)=>{
        setTimeout(()=>{
            // store.dispatch(countReducer(0,data));
            //可以直接获取得到
            dispatch(countReducer(0,data));
        },time)
    }
}