import React from "react";

import classNames from "core/lib/class";

import styles from "./styles.module.css";

const BtnLinkClass = (props) => {
    const classBtn = classNames({
        [styles.btnBase]: true,
        [styles.btn]: true,
    });

    return <div className={classBtn}>{props.content}</div>;
};

BtnLinkClass.defaultProps = {
    content: "",
};

export default BtnLinkClass;
