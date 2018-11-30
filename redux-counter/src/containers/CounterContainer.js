import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";

export function getRandomColor() {
  const colors = [
    "#495057",
    "#f03e3e",
    "#d6336c",
    "#ae3ec9",
    "#7048e8",
    "#4263eb",
    "#1c7cd6",
    "#1098ad",
    "#0ca678",
    "#37b24d",
    "#74b816",
    "#f59f00",
    "#f76707"
  ];

  const random = Math.floor(Math.random() * 13);

  return colors[random];
}

// state를 받아, 컴포넌트의 props로 사용할 객체를 반환한다.
const mapStateToProps = state => {
  return {
    //단일 리듀서 => 복합 리듀서가 되면서 store가 가진 상태 구조가 바뀌었음.
    color: state.colorData.color,
    number: state.numberData.number
  };
};

// dispatch를 받아 액션을 디스패치하는 함수들을 객체안에 넣어서 반환한다.
const mapDispatchToPros = dispatch => {
  return {
    onIncrement: () => dispatch(actions.increment()),
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
      const color = getRandomColor();
      dispatch(actions.setColor(color));
    }
  };
};

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToPros,
  //mergeProps(잘 안쓴다!!) : state와 dispatch가 동시에 필요한 함수를 props로 전달할 때 사용.
)(Counter);

export default CounterContainer;
