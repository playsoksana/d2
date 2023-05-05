import React from "react";

import styles from "./styles.module.css";

const BtnControl = (props) => {
    return (
        <div
            className={styles.btn}
            onClick={() => {
                props.onNext();
                props.onRepit();
            }}
        >
            {props.children}
        </div>
    );
};

BtnControl.defaultProps = {
    onRepit: () => { },
    onNext: () => { },
    children: "",
};

export default BtnControl;
