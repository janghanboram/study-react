import * as types from "./ActionTypes";

// 액션 생성 함수 만들기
// 액션을 만들 떄마다 객체를 바로 생성하기는 번거롭기 때문에

//몇 번째(index) 카운터를 증가
export const increment = (index) =>({
    type: types.INCREMENT,
    index
})

//몇 번째(index) 카운터를 감소
export const decrement = (index) =>({
    type: types.DECREMENT,
    index
})

//몇 번째(index) 카운터의 색깔을 바꿈.
export const setColor = ({index,color}) =>({
    type: types.SET_COLOR,
    index,
    color //색상을 지정하는 액션이므로 값이 필요함.
})

//새로운 카운터를 생성할 때, color값 필요.
export const create = (color) =>({
    type: types.CREATE,
    color
})

//맨 마지막 카운터를 삭제하기 때문에 index 필요없음
export const remove = () =>({
    type: types.REMOVE
})
