import * as types from './ActionTypes';

// action 객체를 만드는 액션 생성 함수를 선언
// 액션을 만들 떄마다 객체를 바로 생성하기는 번거롭기 때문에

// ()=>({})은 function {return {}}와 같음.
// export const increment = () => {
//   return { type: types.INCREMENT };
// };

export const increment = () =>({
    type: types.INCREMENT
})

export const decrement = () =>({
    type: types.DECREMENT
})

export const setColor = (color) =>({
    type: types.SET_COLOR,
    color //색상을 지정하는 액션이므로 값이 필요함.
})
