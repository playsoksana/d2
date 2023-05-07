import React, { useEffect, useState } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

import Container from "components/containers";

import BtnControl from "components/simple/btn-control";

import ArrowRight from "icons/arrow-right";

// import DoubleRangeSlider from "components/smart/DoubleRangeSlider"


import getNumbers from "core/helpers/loader/getNumbers";

import styles from "./styles.module.css";

const NumberPage = () => {
    const [num, setNum] = useState({ min: 0, max: 20 });
    const [value, setValue] = useState("");
    const [randomValue, setRandomValue] = useState(0);
    const [isCorrectResult, setCorrectResult] = useState(false);
    const [visible, setVisible] = useState(false);

    const { speak, voices } = useSpeechSynthesis();

    const onChangeNumber = () => {
        setRandomValue(Math.floor(Math.random() * (num.max - num.min + 1) + num.min));
        setCorrectResult(false);
        setVisible(false);
        setValue("")
    }

    const onChangeInput = (evt) => {
        if (evt.target.value.length > 8) {
            return;
        }
        setNum({ ...num, [evt.target.name]: Number(evt.target.value) });
    }

    const onChangeInputResult = (evt) => {
        setValue(evt.target.value);
    }

    const onChange = () => {
        const isCorrect = getNumbers(randomValue) === value;
        setCorrectResult(isCorrect);
        if (isCorrect) {
            speak({ text: value, voice: voices[2] });
        }
        setVisible(true);
    }

    useEffect(() => {
        setRandomValue(Math.floor(Math.random() * (num.max - num.min + 1) + num.min))
    }, []);

    return (
        <div>
            <Container>
                <div>
                    {/* <DoubleRangeSlider setNum={setNum} minValue={num.min} maxValue={num.max} /> */}

                    <div className={styles.labels}>
                        <div className={styles.labelContainer}>
                            <label className={styles.label}>min</label>
                            <input type="number" maxLength={7} className={styles.input} value={num.min} onChange={onChangeInput} name="min" />
                        </div>
                        <div className={styles.labelContainer}>
                            <label className={styles.label}>max</label>
                            <input type="number" maxLength={7} className={styles.input} value={num.max} onChange={onChangeInput} name="max" />
                        </div>
                    </div>
                    <div className={styles.randomValue}>{randomValue}</div>
                    <div className={styles.labelContainer}>
                        <label className={styles.label}>ergebnis</label>
                        <div className={styles.btnEnter} onClick={onChange}><ArrowRight color={"#555"} /></div>
                        <input className={styles.inputResult} value={num.value} onChange={onChangeInputResult} name="value" type="text" />
                    </div>
                    <div className={styles.resultContainer}>
                        {visible && <div className={styles.text}>{getNumbers(randomValue)}</div>}
                    </div>

                    {/* RESULT */}

                    {isCorrectResult && <BtnControl onNext={onChangeNumber}>Nächste</BtnControl>}
                </div>
            </Container>
        </div>
    );
};

export default NumberPage;
