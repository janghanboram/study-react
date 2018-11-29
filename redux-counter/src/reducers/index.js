import * as types from "../actions/ActionTypes";

//  state Undefined : 스토어가 생성될 때 => state의 기본 값을 initialState로 사용
const initialState = {
  color: "black",
  number: 0
};

/* 
리듀서 함수를 정의.
 리듀서는 state와 action을 파라미터로 받음.
 state의 기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 반환할 것.
*/
function counter (state = initialState, action){
    switch(action.type){
        case types.INCREMENT:
            return {
                ...state,
                number: state.number +1
            }
        case types.DECREMENT:
            return{
                ...state,
                number: state.number -1
            }
        case types.SET_COLOR:
            return{
                ...state,
                color: action.color
            }
        default:
            return state;
    }
}

export default counter;
