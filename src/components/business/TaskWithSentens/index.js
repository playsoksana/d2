import React, { useEffect } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import { useSelector } from "react-redux";

import useCounterSentens from "core/hooks/use-counter-word";

import array from "core/lib/array";
import classNames from "core/lib/class.js";

import Backspace from "icons/backspace";

import BtnControl from "components/simple/btn-control";
import BtnWordBlock from "components/simple/btn-word-block";
import Progress from "components/simple/Progress";

import options from "core/static/words.js";

import styles from "./styles.module.css";

const TaskWithSentens = (props) => {
    const useCounter = useCounterSentens();
    const store = useSelector((state) => ({
        lang: state.lang.lang,
    }));

    const { speak, voices } = useSpeechSynthesis();

    const sentensDeutsch = props.sentensSort[useCounter.counterSentens].deutsch;
    const arrSentensDeutsch = sentensDeutsch.split(" ");
    const lengthSentens = arrSentensDeutsch.length;
    const word = arrSentensDeutsch[useCounter.counterWord];
    let optArr = options[`${word}`];
    const completed = Math.round(
        (useCounter.counterSentens / props.sentensSort.length) * 100
    );

    const isEqualArr = array.isEqual(arrSentensDeutsch, useCounter.answer);

    const onChoice = (wordChoiced) => {
        useCounter.addWordForAnswer(wordChoiced);
    };

    useEffect(() => {
        if (isEqualArr) {
            speak({ text: sentensDeutsch, voice: voices[2] });
        }
    }, [useCounter.answer]);

    const onNext = () => {
        if (!isEqualArr) {
            useCounter.repitSentens();
            return;
        }

        useCounter.stepToNextSentens(sentensDeutsch);

        if (props.sentensSort.length - 1 === useCounter.counterSentens) {
            useCounter.startOver();
        }
    };

    const onDelete = () => {
        useCounter.deleteWord();
    };

    const onRepit = () => {
        speak({ text: sentensDeutsch, voice: voices[2], rate: 0.8 });
    };

    // === //

    const renderOptionForChoice = () => {
        if (useCounter.counterWord === lengthSentens || !optArr) {
            return null;
        }

        return <BtnWordBlock optArr={optArr} onChoice={onChoice} />;
    };

    const renderResult = () => {
        if (
            useCounter.counterWord === lengthSentens ||
            useCounter.counterWord === 0
        ) {
            return;
        }

        return (
            <div className={styles.temperaryAnswer}>
                <div className={styles.answer}>
                    {useCounter.answer.join(" ")}
                </div>
                <div onClick={onDelete} className={styles.iconSpace}>
                    <Backspace color={"rgb(141, 146, 144)"} />
                </div>
            </div>
        );
    };

    const answerChecked = (index) => {
        const classNameWord = classNames({
            [styles.wrongWord]:
                useCounter.answer[index] !== arrSentensDeutsch[index],
        });

        return (
            <span key={index} className={classNameWord}>
                {` ${useCounter.answer[index]}`}
            </span>
        );
    };

    const renderCorectAnswer = () => {
        if (isEqualArr) {
            return null;
        }

        return (
            <div>
                {sentensDeutsch}
                {props.sentensSort[useCounter.counterSentens].question
                    ? "?"
                    : null}
            </div>
        );
    };

    const renderButtons = () => {
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
        if (useCounter.counterWord !== lengthSentens) {
            return;
        }
        const list = useCounter.answer.map((word, index) => {
            return answerChecked(index);
        });

        return (
            <div className={styles.result}>
                <div className={styles.results}>
                    <div>
                        {list}
                        {props.sentensSort[useCounter.counterSentens].question
                            ? "?"
                            : null}
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
                {
                    // eslint-disable-next-line prettier/prettier
                    props.sentensSort[useCounter.counterSentens][store.lang || "UA"]
                }
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
