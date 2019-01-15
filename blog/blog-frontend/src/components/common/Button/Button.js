import React from "react";
import styles from "./Button.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

//NOTE: JSX에서 ...을 사용하면, 내부에 있는 값을 props로 넣어줌
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
        children, to, onClick, disabled, theme = 'default',
}) => {
    const Element = (to && !disabled) ? Link : Div;

    return (
        //NOTE: disabled가 true이면 disabled 클래스를 추가함.
        //NOTE: 비활성화 되면 onClick 실행 안함.
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
            {children}
        </Element>
    )
} 

export default Button;