import React, { useEffect, useMemo } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import { useSelector } from "react-redux";

import useCounterSentens from "core/hooks/use-counter-word";

import array from "core/lib/array";

import AnswerWithNotification from "components/smart/answer-with-notification/index.js";

import BtnWordBlock from "components/simple/btn-word-block";
import Progress from "components/simple/Progress";
import TemporaryAnswer from "components/simple/temporary-answer";

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

    const completed = useMemo(() => Math.round(
        (useCounter.counterSentens / props.sentensSort.length) * 100
    ), [useCounter.counterSentens, props.sentensSort.length])

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
                <TemporaryAnswer answer={useCounter.answer} onDelete={onDelete} />
            </div>
        );
    };

    // === //

    return (
        <div>
            <Progress completed={completed} />
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
