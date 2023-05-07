import React, { useEffect, useLayoutEffect, useState } from "react";

import styles from "./styles.module.css";

var thumbsize = 14;
const min = 0;
const max = 5000;

const DoubleRangeSlider = ({ setNum, minValue, maxValue }) => {
    // console.log("rerender");

    const [avg, setAvg] = useState((min + max) / 2);
    const [minVal, setMinVal] = useState(minValue);
    const [maxVal, setMaxVal] = useState(maxValue);
    // console.log(minVal, maxVal,);

    useEffect(() => {
        setMinVal(minValue);
        setMaxVal(maxValue);
    });

    const width = 300;
    const minWidth = thumbsize + ((avg - min) / (max - min)) * (width - 2 * thumbsize);


    const minPercent = ((minVal - min) / (avg - min)) * 100;
    console.log(1222222, minWidth);
    const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
    const style = {
        min: {
            width: minWidth,
            left: 0,
            "--minRangePercent": `${minPercent}%`
        },
        max: {
            width: thumbsize + ((max - avg) / (max - min)) * (width - 2 * thumbsize),
            left: minWidth,
            "--maxRangePercent": `${maxPercent}%`
        }
    };

    useLayoutEffect(() => {
        setAvg((maxVal + minVal) / 2);
    }, [minVal, maxVal]);

    // console.log(maxVal, minVal, avg, min, max, maxPercent);

    return (
        <div
            className={styles.minMaxSlider}
            data-legendnum="2"
            data-rangemin={min}
            data-rangemax={max}
            data-thumbsize={thumbsize}
            data-rangewidth={width}
        >
            <label htmlFor="min">Minimum price</label>
            <input
                id="min"
                className={styles.min}
                style={style.min}
                name="min"
                type="range"
                step="1"
                min={min}
                max={avg}
                value={minVal}
                onChange={({ target }) => {
                    setMinVal(Math.floor(Number(target.value)));
                    setNum({ max: maxVal, min: minVal })
                }}
            />
            <label htmlFor="max">Maximum price</label>
            <input
                id="max"
                className={styles.max}
                style={style.max}
                name="max"
                type="range"
                step="1"
                min={avg}
                max={max}
                value={maxVal}
                onChange={({ target }) => {
                    setMaxVal(Math.ceil(Number(target.value)));
                    setNum({ max: maxVal, min: minVal })
                }}
            />
        </div>
    );
};

export default DoubleRangeSlider;