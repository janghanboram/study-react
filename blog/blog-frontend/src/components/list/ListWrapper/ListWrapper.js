/* NOTE: ListWrapper 컴포넌트의 역할
 * 내부 내용을 페이지 한가운데 정렬
 * 위.아래 패딩 설정
 * 브라우저 크기에 따라 화면 크기 조정
 */

import React from "react";
import styles from "./ListWrapper.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ListWrapper = ({ children }) => (
  <div className={cx("list-wrapper")}>{children}</div>
);

export default ListWrapper;
