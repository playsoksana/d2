import React from "react";

import styles from "./styles.module.css";

const BtnWordBlock = (props) => {
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
    onChoice: () => { },
};

export default BtnWordBlock;
