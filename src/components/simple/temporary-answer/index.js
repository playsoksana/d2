import React from "react";

import Backspace from "icons/backspace";

import styles from "./styles.module.css";

const TemporaryAnswer = (props) => {
    if (props.answer.length === 0) {
        return null;
    }
    return (
        <div className={styles.temperaryAnswer}>
            <div className={styles.answer}>
                {props.answer.join(" ")}
            </div>
            <div onClick={props.onDelete}>
                <Backspace color={"rgb(141, 146, 144)"} />
            </div>
        </div>
    );
};

TemporaryAnswer.defaultProps = {
    answer: [],
    onDelete: () => { },
}

export default TemporaryAnswer;
