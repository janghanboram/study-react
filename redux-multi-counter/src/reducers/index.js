// 액션의 type에 따라 변화를 일으키는 함수
import * as types from "../actions/ActionTypes";

//최초 변화를 일으키기 전에 가지고 있어야 할 초기 상태를 정의
const initalState = {
  counters: [
    {
      color: "black",
      number: 0
    }
  ]
};

// 리듀서 함수 정의
// Parameter : state와 action (action.type에 따라 state를 변화를 일으킴)
// state의 값은 절대로 직접 수정하면 안됨.
// 반드시 기존 state 값에 새 상태를 덮어쓴 상태 객체를 만들어서 반환함.
function counter(state = initalState, action) {
  const { counters } = state;

  switch (
    action.type // **액션의 type**에 따라 변화를 일으키는 함수!!!!
  ) {
    case types.CREATE:
      return {
        counters: [
          ...counters,
          {
            color: action.color,
            number: 0
          }
        ]
      };
    case types.REMOVE:
      return {
        counters: [...counters.slice(0, counters.length - 1)]
      };
    case types.INCREMENT:
      return {
        counters: [
          ...counters.slice(0, action.index),
          { 
            ...counters[action.index],
            number: counters[action.index].number + 1 
          },
          ...counters.slice(action.index + 1, counters.length)
        ]
      };
    case types.DECREMENT:
      return {
        counters:[
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            number: counters[action.index].number -1
          },
          ...counters.slice(action.index+1, counters.length)
        ]
      };
    case types.SET_COLOR:
      return {
        counters: [
          ...counters.slice(0, action.index),
          {
            ...counters[action.index],
            color: action.color
          },
          ...counters.slice(action.index +1, counters.length)
        ]
      };
    default:
      return state;
  }
}

export default counter;
