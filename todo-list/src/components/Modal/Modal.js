import React, { Component } from 'react';
import styles from './Modal.scss'
import classNames from 'classnames';

const cx = classNames.bind(styles)

class Modal extends Component {
  state = {
    input: ""
  };

  handleChange = (e)=>{
    const {value} = e.target
   
    this.setState({
        input: value
    })
  }

  render() {
    const { value, onEdit } = this.props;

    return (
      <div className={cx("over-lay", value ? "on" : "off")}>
        <div className={cx("modal")}>
          <div className={cx("header")}>
            <h3>일정 수정</h3>
          </div>
          <div className={cx("body")}>
            <input onChange={this.handleChange} />
          </div>
          <div className={cx("footer")}>
            <button
              className={cx("btn-cancel")}
              onClick={() => {
                onEdit(false, this.state.input);
              }}
            >
              취소
            </button>
            <button
              className={cx("btn-finish")}
              onClick={() => {
                onEdit(true, this.state.input);
              }}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
