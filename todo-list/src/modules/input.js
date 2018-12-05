/*
    * Ducks 구조로 만드는 리덕스 모듈
    * 액션 타입 설정
    * 액션 생성 함수 만들기
    * 초기 상태 정의하기
    * 리듀서 정의하기
*/

import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions'

// 액션 타입 정하기
const SET_INPUT = 'input/SET_INPUT'
// 액션 생성 함수
export const setInput = createAction(SET_INPUT)

const initialState = Map({
    value:''
})

// 리듀서
export default handleActions({
    [SET_INPUT]: (state, action)=>{
        return state.set('value', action.payload)
    }
}, initialState)