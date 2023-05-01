import React, { useEffect, useState } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import { useSelector } from "react-redux";

import array from "core/lib/array";
import classNames from "core/lib/class.js";

import Backspace from "icons/backspace";

import BtnControl from "components/simple/btn-control";
import BtnWordBlock from "components/simple/btn-word-block";
import Progress from "components/simple/Progress";

import options from "core/static/words.js";

import styles from "./styles.module.css";

const TaskWithSentens = (props) => {
    const [counter, setCounter] = useState(0);
    const [counterWord, setCounterWord] = useState(0);
    const [answer, setAnswer] = useState([]);

    const store = useSelector((state) => ({
        lang: state.lang,
    }));

    const { speak, voices } = useSpeechSynthesis();

    const sentensDeutsch = props.sentensSort[counter].deutsch;
    const arrSentensDeutsch = sentensDeutsch.split(" ");
    const lengthSentens = arrSentensDeutsch.length;
    const word = arrSentensDeutsch[counterWord];
    let optArr = options[`${word}`];
    const completed = Math.round((counter / props.sentensSort.length) * 100);

    const onChoice = (wordChoiced) => {
        setAnswer((pre) => [...pre, wordChoiced]);
        setCounterWord((pre) => pre + 1);
    };

    const onNext = () => {
        const isEqualArr = array.isEqual(arrSentensDeutsch, answer);

        if (!isEqualArr) {
            setAnswer([]);
            setCounterWord(0);
            return;
        }

        setCounter((pre) => pre + 1);
        setAnswer([]);
        setCounterWord(0);

        if (props.sentensSort.length - 1 === counter) {
            setCounter(0);
            setAnswer([]);
            setCounterWord(0);
            return;
        }
    };

    const onDelete = () => {
        setCounterWord((pre) => pre - 1);
        setAnswer((pre) => {
            return pre.slice(0, pre.length - 1);
        });
    };

    const onRepit = () => {
        speak({ text: sentensDeutsch, voice: voices[2], rate: 0.8 });
    };

    // === //

    useEffect(() => {
        if (optArr && optArr[0]) {
            optArr = [...optArr].sort(() => Math.random() - 0.5);
        }
    }, []);

    useEffect(() => {
        if (counterWord === lengthSentens) {
            if (sentensDeutsch === answer.join(" ")) {
                speak({ text: sentensDeutsch, voice: voices[2] });
            }
        }
    }, [answer]);

    // === //

    const renderOptionForChoice = () => {
        if (counterWord === lengthSentens || !optArr) {
            return null;
        }

        return <BtnWordBlock optArr={optArr} onChoice={onChoice} />;
    };

    const renderResult = () => {
        if (counterWord === lengthSentens || counterWord === 0) {
            return;
        }

        return (
            <div className={styles.temperaryAnswer}>
                <div className={styles.answer}>{answer.join(" ")}</div>
                <div onClick={onDelete} className={styles.iconSpace}>
                    <Backspace color={"rgb(141, 146, 144)"} />
                </div>
            </div>
        );
    };

    const answerChecked = (index) => {
        const classNameWord = classNames({
            [styles.wrongWord]: answer[index] !== arrSentensDeutsch[index],
        });

        return (
            <span key={index} className={classNameWord}>
                {` ${answer[index]}`}
            </span>
        );
    };

    const renderCorectAnswer = () => {
        const isEqualArr = array.isEqual(arrSentensDeutsch, answer);
        if (isEqualArr) {
            return null;
        }

        return (
            <div>
                {sentensDeutsch}
                {props.sentensSort[counter].question ? "?" : null}
            </div>
        );
    };

    const renderButtons = () => {
        const isEqualArr = array.isEqual(arrSentensDeutsch, answer);
        if (isEqualArr) {
            return (
                <div className={styles.btnContainer}>
                    <BtnControl onRepit={onRepit}>Repetieren</BtnControl>
                    <BtnControl onNext={onNext}>Nächste</BtnControl>
                </div>
            );
        }
        return <BtnControl onNext={onNext}>Noch einmal</BtnControl>;
    };

    const renderAnswerWithNotification = () => {
        if (counterWord !== lengthSentens) {
            return;
        }
        const list = answer.map((word, index) => {
            return answerChecked(index);
        });

        return (
            <div className={styles.result}>
                <div className={styles.results}>
                    <div>
                        {list}
                        {props.sentensSort[counter].question ? "?" : null}
                    </div>
                    {renderCorectAnswer()}
                </div>
                {renderButtons()}
            </div>
        );
    };

    // === //

    return (
        <div>
            <Progress completed={completed} />
            <div className={styles.sentenceNative}>
                {props.sentensSort[counter][store.lang?.lang || "UA"]}
            </div>
            {renderOptionForChoice()}
            {renderResult()}
            {renderAnswerWithNotification()}
        </div>
    );
};

TaskWithSentens.defaultProps = {
    sentensSort: [],
};

export default TaskWithSentens;
