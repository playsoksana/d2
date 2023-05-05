import React from "react";

import classNames from "core/lib/class.js";

import BtnControl from "components/simple/btn-control";

import styles from "./styles.module.css";

const AnswerWithNotification = (props) => {
    const answer = props.useCounter.answer;

    const answerChecked = (index) => {
        const arrQuestion = props.sentence.split(" ")[index];

        const classNameWord = classNames({
            [styles.wrongWord]: answer[index] !== arrQuestion
        });

        return (
            <span key={index} className={classNameWord}>
                {` ${answer[index]}`}
            </span>
        );
    };

    const list = answer.map((_word, index) => {
        return answerChecked(index);
    });

    const renderCorectAnswer = () => {
        if (props.isEqualArr) {
            return null;
        }

        return (
            <div>
                {props.sentence}
                {props.sumbol}
            </div>
        );
    };

    const renderButtons = () => {
        if (props.isEqualArr) {
            return (
                <div className={styles.btnContainer}>
                    <BtnControl onRepit={props.onRepit}>Repetieren</BtnControl>
                    <BtnControl onNext={props.onNext}>Nächste</BtnControl>
                </div>
            );
        }
        return <BtnControl onNext={props.onNext}>Noch einmal</BtnControl>;
    };

    return (
        <div className={styles.result}>
            <div className={styles.results}>
                <div>
                    {list}
                    {props.sumbol}
                </div>
                {renderCorectAnswer()}
            </div>
            {renderButtons()}
        </div>
    );
};

AnswerWithNotification.defaultProps = {
    isEqualArr: false,
    sentence: [],
    useCounter: {},
    sumbol: "",
    onRepit: () => { },
    onNext: () => { },
};

export default AnswerWithNotification;
