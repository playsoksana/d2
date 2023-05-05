import { useState } from "react";

const useCounterSentens = () => {
    const [counterSentens, setCounterSentens] = useState(0);
    const [counterWord, setCounterWord] = useState(0);
    const [answer, setAnswer] = useState([]);

    // TODO: make one useState

    const repitSentens = () => {
        setAnswer([]);
        setCounterWord(0);
    };

    const stepToNextSentens = () => {
        setCounterSentens((pre) => pre + 1);
        setAnswer([]);
        setCounterWord(0);
    };

    const startOver = () => {
        setCounterSentens(0);
        setCounterWord(0);
        setAnswer([]);
    };

    const deleteWord = () => {
        setCounterWord((pre) => pre - 1);
        setAnswer((pre) => {
            return pre.slice(0, pre.length - 1);
        });
    };

    const addWordForAnswer = (word) => {
        setAnswer((pre) => [...pre, word]);
        setCounterWord((pre) => pre + 1);
    };

    return {
        counterSentens,
        counterWord,
        answer,
        repitSentens,
        stepToNextSentens,
        startOver,
        deleteWord,
        addWordForAnswer,
    };
};

export default useCounterSentens;
