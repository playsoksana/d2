import React, { useEffect } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import { useSelector } from "react-redux";

import useCounterSentens from "core/hooks/use-counter-word";

import array from "core/lib/array";

import Backspace from "icons/backspace";

import AnswerWithNotification from "components/smart/answer-with-notification/index.js";

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

    const sentence = props.sentensSort[useCounter.counterSentens];
    const sentensDeutsch = sentence.deutsch.replace(/[?!]*/g, "");
    const sumbol = sentence.deutsch[sentence.deutsch.length - 1].replace(/[a-zA-Z ]*/g, "");

    const arrSentensDeutsch = sentensDeutsch.split(" ");
    const lengthSentens = arrSentensDeutsch.length;
    let optArr = options[`${arrSentensDeutsch[useCounter.counterWord]}`];

    const getCompleted = () => Math.round(
        (useCounter.counterSentens / props.sentensSort.length) * 100
    );

    const isEqualArr = array.isEqual(arrSentensDeutsch, useCounter.answer);

    const onChoice = (wordChoiced) => {
        useCounter.addWordForAnswer(wordChoiced);
    };

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

    useEffect(() => {
        if (isEqualArr) {
            speak({ text: sentensDeutsch, voice: voices[2] });
        }
    }, [useCounter.answer]);

    // === //

    const renderContent = () => {
        if (useCounter.counterWord === lengthSentens) {
            return (
                <div>

                    <AnswerWithNotification
                        isEqualArr={isEqualArr}
                        sentence={sentensDeutsch}
                        sumbol={sumbol}
                        useCounter={useCounter}
                        onRepit={onRepit}
                        onNext={onNext}

                    />
                </div>

            );

        }

        return (
            <div>
                <BtnWordBlock optArr={optArr} onChoice={onChoice} />
                <div className={styles.temperaryAnswer}>
                    <div className={styles.answer}>
                        {useCounter.answer.join(" ")}
                    </div>
                    <div onClick={onDelete} className={styles.iconSpace}>
                        <Backspace color={"rgb(141, 146, 144)"} />
                    </div>
                </div>
            </div>
        );
    };

    // === //

    return (
        <div>
            <Progress completed={getCompleted()} />
            <div className={styles.sentenceNative}>
                {props.sentensSort[useCounter.counterSentens][store.lang || "UA"]
                }
            </div>
            {renderContent()}
        </div>
    );
};

TaskWithSentens.defaultProps = {
    sentensSort: [],
};

export default TaskWithSentens;
