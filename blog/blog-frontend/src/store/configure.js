import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";
import penderMiddleware from "redux-pender";
import * as modules from "./modules";

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// 개발 모드 일때만 Redux DevTool 활성화
const isDev = process.env.NODE_DEV === "development";
const devtools = isDev & window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState : Server-Side-Rendering 했을 때 전달받는 초기 값
const configure = preloadedState =>
  createStore(
    reducers,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

export default configure