import * as types from "./ActionTypes";
// action 객체를 만드는 액션 생성 함수를 선언
// ()=>({})은 function {return {}}와 같음.

export const increment = () => {
  return { type: types.INCREMENT };
};

export const decrement = () => ({
  type: types.DECREMENT
});

export const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});
