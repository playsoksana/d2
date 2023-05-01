import React from "react";

import styles from "./styles.module.css";

const BtnWordBlock = (props) => {
    if (!props.optArr[0]) {
        return null;
    }

    const list = props.optArr.map((word, i) => {
        return (
            <div
                key={i}
                className={styles.btnWord}
                onClick={() => {
                    props.onChoice(word);
                }}
            >
                {word}
            </div>
        );
    });

    return <div className={styles.btnWrap}>{list}</div>;
};

BtnWordBlock.defaultProps = {
    optArr: [],
    // eslint-disable-next-line prettier/prettier
    onChoice: () => {},
};

export default BtnWordBlock;
